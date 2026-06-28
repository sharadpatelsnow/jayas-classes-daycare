import { Link } from 'react-router-dom'
import logoSvg from '../../assets/jaya-logo.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
}

export default function Logo({
  size = 'md',
  light = false,
}: LogoProps) {
  const iconSize = {
    sm: 40,
    md: 56,
    lg: 72,
  }[size]

  const textSizes = {
    sm: 'text-sm leading-tight',
    md: 'text-base leading-tight',
    lg: 'text-xl leading-tight',
  }[size]

  const subSizes = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
  }[size]

  return (
    <Link
      to="/"
      className="flex items-center gap-3 focus-visible:outline-none"
      aria-label="Jaya's Classes and Day Care Center"
    >
      <img
        src={logoSvg}
        alt="Jaya's Classes and Day Care Center"
        width={iconSize}
        height={iconSize}
        className="object-contain shrink-0"
      />

      <div>
        <div
          className={`font-heading font-bold ${textSizes} ${
            light ? 'text-white' : 'text-primary-900'
          }`}
        >
          Jaya's Classes
        </div>

        <div
          className={`font-body font-medium ${subSizes} ${
            light ? 'text-secondary-300' : 'text-secondary-600'
          }`}
        >
          & Day Care Center
        </div>
      </div>
    </Link>
  )
}