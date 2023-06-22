import React, { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'

import { Overlay } from '@my-own/components.overlay'
import { Portal } from '@my-own/components.portal'

import styles from './drawer.module.scss'

export interface IDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  dataTestId?: string
}

export const Drawer = ({
  open,
  onClose,
  className,
  children,
  dataTestId = 'drawer-component',
  ...rest
}: IDrawerProps) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const closeDrawer = useMemo(() => openDrawer && !open, [openDrawer, open])

  const classes = classNames(
    styles.wrapper,
    {
      [styles.open]: openDrawer,
      [styles.close]: closeDrawer
    },
    className
  )

  useEffect(() => {
    document.body.style.overflow = openDrawer ? 'hidden' : 'auto'

    if (open) {
      setOpenDrawer(true)
    }

    let animationDelay: NodeJS.Timeout

    if (closeDrawer) {
      animationDelay = setTimeout(() => {
        setOpenDrawer(false)
      }, 300)
    }

    return () => clearTimeout(animationDelay)
  }, [openDrawer, closeDrawer, open])

  return (
    <>
      {openDrawer && (
        <Portal>
          <>
            <Overlay open onClick={onClose} />
            <div data-testid={dataTestId} className={classes} {...rest}>
              {children}
            </div>
          </>
        </Portal>
      )}
    </>
  )
}
