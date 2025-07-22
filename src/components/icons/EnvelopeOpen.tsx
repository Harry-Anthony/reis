import * as React from 'react'
import type { SVGProps } from 'react'
const SvgEnvelopeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.5v11.375a.875.875 0 0 0 .875.875h19.25a.875.875 0 0 0 .875-.875V10.5L14 3.5zM12.086 16.625l-8.313 5.873M24.227 22.498l-8.313-5.873"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m24.5 10.5-8.586 6.125h-3.828L3.5 10.5"
    />
  </svg>
)
export default SvgEnvelopeOpen
