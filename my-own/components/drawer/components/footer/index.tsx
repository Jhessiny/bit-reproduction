import React from 'react'
import classNames from 'classnames'
import styles from './footer.module.scss'

export interface IDrawerFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dataTestId?: string
  children: React.ReactNode
}

export const Footer = ({
  className,
  dataTestId = 'drawer-footer',
  children,
  ...rest
}: IDrawerFooterProps) => {
  return (
    <div
      {...rest}
      data-testid={dataTestId}
      className={classNames(styles.footer, className)}
    >
      {children}
    </div>
  )
}
