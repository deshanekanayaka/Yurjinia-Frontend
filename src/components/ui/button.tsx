import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none disabled:opacity-50',
        variant === 'default' && 'bg-brand text-white hover:bg-brand-hover',
        variant === 'outline' && 'border border-border-soft bg-white text-text-secondary hover:bg-bg-secondary',
        className
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'
export { Button }
