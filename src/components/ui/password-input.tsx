import * as React from 'react'
import { InputToggle } from './inputToggle'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ color, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const icon = showPassword ? (
      <EyeIcon
        color={color}
        className='select-none'
        onClick={() => setShowPassword(false)}
      />
    ) : (
      <EyeOffIcon
        color={color}
        className='select-none'
        onClick={() => setShowPassword(true)}
      />
    )

    return (
      <InputToggle
        className={className}
        {...props}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        suffix={icon}
      />
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
