import { FC } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  id: string
}

const Portal: FC<PortalProps> = ({ children, id }) => {
  const containerInDom = document.querySelector(`#${id}`)
  let container: Element
  if (!containerInDom) {
    container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)
  } else {
    container = containerInDom
  }

  return createPortal(children, container)
}

export default Portal
