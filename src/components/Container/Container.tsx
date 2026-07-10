import type { ElementType, ReactNode } from 'react'
import './Container.css'

interface ContainerProps {
  as?: ElementType
  className?: string
  children?: ReactNode
  [key: string]: unknown
}

function Container({ as: Component = 'div', className = '', children, ...rest }: ContainerProps) {
  return (
    <Component className={`container ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}

export default Container
