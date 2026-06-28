import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'teal' | 'primary' | 'gradient' | 'dark'
}

const bgMap = {
  white: 'bg-white',
  light: 'bg-gray-50',
  teal: 'bg-secondary-50',
  primary: 'bg-primary-50',
  gradient: 'bg-hero',
  dark: 'bg-dark-gradient',
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${bgMap[background]} ${className}`}>
      <div className="container-main">{children}</div>
    </section>
  )
}

export function SectionHeader({
  eyebrow, title, subtitle, centered = true, light = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold tracking-widest uppercase mb-3 block ${light ? 'text-secondary-300' : 'text-secondary-500'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
