import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

export const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ children, ...props }, forwardedRef) =>
    createPortal(
      <div {...props} aria-label='portal' ref={forwardedRef}>
        {React.Children.only(children)}
      </div>,
      globalThis?.document?.body
    )
)

Portal.displayName = 'Portal'
