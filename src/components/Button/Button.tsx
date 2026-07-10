import type { ButtonHTMLAttributes } from 'react'
import Text from '../Text/Text.tsx'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`.trim()}
      {...rest}
    >
      <Text as="span" variant="label" color="inherit">
        {children}
      </Text>
    </button>
  )
}

export default Button
