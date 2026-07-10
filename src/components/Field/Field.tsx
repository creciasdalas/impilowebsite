import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import Text from '../Text/Text.tsx'
import './Field.css'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  success?: boolean
  tone?: 'light' | 'dark'
}

function Field({
  label,
  helperText,
  error,
  success = false,
  tone = 'light',
  required,
  disabled,
  id,
  className = '',
  ...rest
}: FieldProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const helperId = `${inputId}-helper`
  const message = error ?? helperText

  const stateClass = error ? 'field--error' : success ? 'field--success' : ''

  return (
    <div
      className={`field field--${tone} ${stateClass} ${disabled ? 'field--disabled' : ''} ${className}`.trim()}
    >
      {label && (
        <label htmlFor={inputId} className="field__label">
          <Text as="span" variant="label" weight="var(--font-weight-medium)">
            {label}
            {required && <span className="field__required">*</span>}
          </Text>
        </label>
      )}

      <input
        id={inputId}
        className="field__input"
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={message ? helperId : undefined}
        {...rest}
      />

      {message && (
        <Text
          as="span"
          variant="label"
          size={14}
          className="field__helper"
          id={helperId}
        >
          {message}
        </Text>
      )}
    </div>
  )
}

export default Field
