import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'whatsapp' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
}

const variants = {
  primary: 'bg-primary-900 hover:bg-primary-800 text-white shadow-cta',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-soft',
  accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-soft',
  whatsapp: 'bg-[#25D366] hover:bg-[#1aab52] text-white shadow-soft',
  outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white',
  ghost: 'text-primary-900 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
}

export default function Button({
  children, variant = 'primary', size = 'lg', onClick, href, target, rel, type = 'button',
  disabled, className = '', fullWidth, icon,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 font-semibold font-body rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-0.5'} ${className}`

  const content = (<>{icon && <span>{icon}</span>}{children}</>)

  if (href) {
    return (
      <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        href={href} target={target} rel={rel} className={cls}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </motion.button>
  )
}
