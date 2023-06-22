import React from 'react'

import classNames from 'classnames'

import styles from './header.module.scss'

export interface IDrawerHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dataTestId?: string
  onClose: () => void
}

export const Header = ({
  children,
  className,
  dataTestId = 'drawer-header',
  onClose,
  ...rest
}: IDrawerHeaderProps) => {
  return (
    <div
      {...rest}
      data-testid={dataTestId}
      className={classNames(styles.header, className)}
    >
      {children}

      <button
        type='button'
        data-testid='drawer-header-close-button'
        className={styles.closeButton}
        onClick={onClose}
      >
        X
      </button>
    </div>
  )
}
