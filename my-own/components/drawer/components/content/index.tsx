import React from 'react'
import classNames from 'classnames'

import styles from './content.module.scss'

export interface IDrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dataTestId?: string
  children: React.ReactNode
}

export const Content = ({
  className,
  dataTestId = 'drawer-content',
  children,
  ...rest
}: IDrawerContentProps) => {
  return (
    <div
      {...rest}
      data-testid={dataTestId}
      className={classNames(styles.content, className)}
    >
      {children}
    </div>
  )
}
