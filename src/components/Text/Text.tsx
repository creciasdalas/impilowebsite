import type { CSSProperties, ElementType, ReactNode } from 'react'
import './Text.css'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'label'

const defaultTagByVariant: Record<TextVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
  label: 'span',
}

interface TextProps {
  as?: ElementType
  variant?: TextVariant
  size?: number
  weight?: CSSProperties['fontWeight']
  color?: CSSProperties['color']
  align?: CSSProperties['textAlign']
  className?: string
  style?: CSSProperties
  children?: ReactNode
  [key: string]: unknown
}

function Text({
  as,
  variant = 'body',
  size,
  weight,
  color,
  align,
  className = '',
  style,
  children,
  ...rest
}: TextProps) {
  const Component = as ?? defaultTagByVariant[variant]

  const textStyle: CSSProperties = {
    fontSize: size ? `${size}px` : undefined,
    fontWeight: weight,
    color,
    textAlign: align,
    ...style,
  }

  return (
    <Component
      className={`text text--${variant} ${className}`.trim()}
      style={textStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text
