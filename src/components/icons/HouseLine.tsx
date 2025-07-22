import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHouseLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.75}
      d="M37.125 37.125V19.852a1.43 1.43 0 0 0-.447-1.015L22.928 6.342a1.375 1.375 0 0 0-1.856 0L7.322 18.838a1.43 1.43 0 0 0-.447 1.014v17.273M2.75 37.125h38.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.75}
      d="M26.125 37.125V27.5a1.375 1.375 0 0 0-1.375-1.375h-5.5a1.375 1.375 0 0 0-1.375 1.375v9.625"
    />
  </svg>
)
export default SvgHouseLine
