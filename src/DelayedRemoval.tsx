import React, { FC, useState, useEffect } from 'react'

interface DelayedRemovalProps {
  mount: boolean
  interval: number
}

const DelayedRemoval: FC<DelayedRemovalProps> = ({
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
