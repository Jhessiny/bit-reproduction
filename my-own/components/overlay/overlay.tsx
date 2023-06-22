import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './overlay.module.scss'

interface IProps {
  onClick?: () => void
  open?: boolean
}

export const Overlay = ({ onClick, open }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const shouldClose = isOpen && !open

  const classes = classNames(styles.overlay, {
    [styles.open]: isOpen,
    [styles.close]: shouldClose
  })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    let timer: NodeJS.Timeout
    if (open) {
      setIsOpen(true)
    }
    if (shouldClose) {
      timer = setTimeout(() => {
        setIsOpen(false)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [open, isOpen])

  return (
    <>
      {isOpen && (
        <div
          role='none'
          data-testid='overlay'
          onClick={onClick}
          className={classes}
        />
      )}
    </>
  )
}
