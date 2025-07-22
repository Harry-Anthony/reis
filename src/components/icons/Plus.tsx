import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 23"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.382}
      d="M3.952 11.616h14.722M11.313 4.255v14.722"
    />
  </svg>
)
export default SvgPlus
