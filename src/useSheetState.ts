import { useState } from 'react'
import { pushStateRecord, removeStateRecord } from 'react-backable'
import generateId from './generateId'

const useSheetState = (initial: boolean): [boolean, (state: boolean) => void] => {
    const [key] = useState(generateId(16))
    const [state, setState] = useState(initial)
    const setSheetState = (newState: boolean) => {
        if (newState) {
            pushStateRecord(`${key}.presenting`, () => setState(false))
        } else {
            removeStateRecord(`${key}.presenting`)
        }
        setState(newState)
    }
    return [state, setSheetState]
}

export default useSheetState
