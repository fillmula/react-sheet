import React, { useState, useEffect, ReactNode, ReactElement } from 'react'

type DelayedRemovalProps = {
  mount: boolean
  interval: number
  children: ReactNode
}

const DelayedRemoval: (props: DelayedRemovalProps) => ReactElement = ({
  mount, interval, children
}) => {

  const [installed, setInstalled] = useState(mount)

  useEffect(() => {
    if (!mount) {
      const handle = setTimeout(() => {
        setInstalled(false)
      }, interval * 1000)
      return () => {
        clearInterval(handle)
      };
    } else {
      setInstalled(true)
    }
  }, [mount])

  return installed ? <>{children}</> : <></>
}

export default DelayedRemoval
