import * as React from 'react'
import type { SVGProps } from 'react'
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"
    />
  </svg>
)
export default SvgArrowRight
