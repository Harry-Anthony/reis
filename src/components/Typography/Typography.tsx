import { ReactNode } from 'react'

type TextProps = {
  className?: string
  children: ReactNode
}

export const baseClassNames = {
  display: 'font-semibold text-[3.25rem]/18',
  h1: 'font-semibold text-[2.5rem]/12',
  h2: 'font-semibold text-3xl/11',
  h3: 'font-semibold text-[2rem]/10',
  h4: 'font-medium text-2xl/8',
  h5: 'font-medium text-base/6',
  bodyl1: 'font-[600] text-xl/7',
  bodyl2: 'font-[500] text-xl/7',
  bodyl3: 'font-[400] text-xl/7',
  bodyreg1: 'font-[600] text-base/6',
  bodyreg2: 'font-[500] text-base/6',
  bodyreg3: 'font-[400] text-base/6',
  bodys1: 'font-[600] text-sm/5.5',
  bodys2: 'font-[500] text-sm/5.5',
  bodys3: 'font-[400] text-sm/5.5',
  bodyt1: 'font-[600] text-xs',
  bodyt2: 'font-[500] text-xs',
  bodyt3: 'font-[400] text-xs',
}

interface TypographyProps extends TextProps {
  variant: keyof typeof baseClassNames
}
export function Typography(props: TypographyProps) {
  const { className = '', variant, children } = props

  const selectedVar = baseClassNames[variant] || ''
  return (
    <span className={`${selectedVar} ${className} font-inter`}>{children}</span>
  )
}
