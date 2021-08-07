import React, {
    FC, CSSProperties, useState, ReactElement, cloneElement, useEffect
} from 'react'
import DelayedRemoval from './DelayedRemoval'
import generateId from './generateId'
import Portal from './Portal'
import useInjectSheetCSS from './useInjectSheetCSS'

export interface SheetSettings {
    duration?: number
    shadow?: boolean
    style?: CSSProperties
    enterStyle?: CSSProperties
    leaveStyle?: CSSProperties
    shadowStyle?: CSSProperties
    shadowEnterStyle?: CSSProperties
    shadowLeaveStyle?: CSSProperties
    shadowClassName?: string
    sheetClassName?: string
}

export enum SheetPosition {
    Top,
    Bottom,
    Left,
    Right
}

const defaultShadowStyle: CSSProperties = {
    'backgroundColor': 'rgba(0, 0, 0, 0.3)',
    'position': 'absolute',
    'top': 0,
    'bottom': 0,
    'left': 0,
    'right': 0
}

const defaultSheetStyle: CSSProperties = {
    'position': 'absolute',
    'top': 0,
    'bottom': 0,
    'left': 0,
    'right': 0
}

const shadowClassNameFrom = (position: SheetPosition) => {
    return ''
}

const sheetClassNameFrom = (position: SheetPosition) => {
    switch (position) {
        case SheetPosition.Top:
            return ' __rsp-direction-top'
        case SheetPosition.Bottom:
            return ' __rsp-direction-bottom'
        case SheetPosition.Left:
            return ' __rsp-direction-left'
        case SheetPosition.Right:
            return ' __rsp-direction-right'
    }
}

interface FullScreenSheetStyleParams {
    position?: SheetPosition
    duration?: number,
    shadow?: boolean
    shadowClassName?: string
    sheetClassName?: string
}

export const FullScreenSheetStyle: (params: FullScreenSheetStyleParams) => SheetSettings = ({
    position = SheetPosition.Bottom,
    duration = 0.3,
    shadow = true,
    shadowClassName = '',
    sheetClassName = '',
}): SheetSettings => {
    return {
        duration: duration,
        shadow: shadow,
        shadowStyle: defaultShadowStyle,
        style: defaultSheetStyle,
        shadowClassName: shadowClassName + shadowClassNameFrom(position),
        sheetClassName: sheetClassName + sheetClassNameFrom(position)
    }
}

interface FormSheetStyleParams {
    position?: SheetPosition
    duration?: number,
    shadow?: boolean
    shadowClassName?: string
    sheetClassName?: string
}

export const FormSheetStyle: (params: FormSheetStyleParams) => SheetSettings = ({
    position = SheetPosition.Bottom,
    duration = 0.3,
    shadow = true,
    shadowClassName = '',
    sheetClassName = '',
}): SheetSettings => {
    return {
        duration: duration,
        shadow: shadow,
        shadowStyle: defaultShadowStyle,
        style: defaultSheetStyle,
        shadowClassName: shadowClassName + shadowClassNameFrom(position),
        sheetClassName: sheetClassName + sheetClassNameFrom(position)
    }
}

interface PageSheetStyleParams {
    position?: SheetPosition
    duration?: number,
    shadow?: boolean
    shadowClassName?: string
    sheetClassName?: string
}

export const PageSheetStyle: (params: PageSheetStyleParams) => SheetSettings = ({
    position = SheetPosition.Bottom,
    duration = 0.3,
    shadow = true,
    shadowClassName = '',
    sheetClassName = '',
}): SheetSettings => {
    return {
        duration: duration,
        shadow: shadow,
        shadowStyle: defaultShadowStyle,
        style: defaultSheetStyle,
        shadowClassName: shadowClassName + shadowClassNameFrom(position),
        sheetClassName: sheetClassName + sheetClassNameFrom(position)
    }
}

interface SheetProps {
    isActive: boolean
    setIsActive(isActive: boolean): void
    settings?: SheetSettings
    children: ReactElement
}

enum SheetStatus {
    Enter,
    Leave,
    Static
}

export interface SheetPageProps {
    dismiss(): void
}

const defaultSettings = FullScreenSheetStyle({})

const Sheet: FC<SheetProps> = ({ isActive, setIsActive, settings = defaultSettings, children }) => {
    useInjectSheetCSS()
    const [id] = useState(generateId(16))
    const [status, setStatus] = useState(SheetStatus.Static)
    useEffect(() => {
        if (isActive) {
            setStatus(SheetStatus.Enter)
            const handler = setTimeout(() => {
                setStatus(SheetStatus.Static)
            }, (settings.duration ?? 0.3) * 1000)
            return () => {
                clearInterval(handler)
            }
        } else {
            setStatus(SheetStatus.Leave)
        }
    }, [isActive])
    const classNameFromStatus = () => {
        switch (status) {
            case SheetStatus.Enter:
                return ' __rsp-enter'
            case SheetStatus.Static:
                return ' __rsp-static'
            case SheetStatus.Leave:
                return ' __rsp-leave'
        }
    }
    return <DelayedRemoval interval={settings.duration ?? 0.3} mount={isActive}>
        <Portal id={id}>
            {settings.shadow ? <div className={`__rsp-shadow${classNameFromStatus()} ${settings.shadowClassName}`} style={settings.shadowStyle ?? defaultShadowStyle} onClick={() => {
                setIsActive(false)
            }} />: <></>}
            <div className={`__rsp-sheet${classNameFromStatus()} ${settings.sheetClassName}`} style={settings.style ?? defaultSheetStyle}>
                {cloneElement(children, { dismiss: () => setIsActive(false) })}
            </div>
        </Portal>
    </DelayedRemoval>
}

export default Sheet
