import { ReactElement, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  id: string
  children: ReactNode
}

const Portal: (PortalProps) => ReactElement = ({ children, id }) => {
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
