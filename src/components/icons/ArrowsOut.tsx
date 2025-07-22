import * as React from 'react'
import type { SVGProps } from 'react'
const SvgArrowsOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M16.69 5.369h3.75v3.75M15.19 10.619l5.25-5.25M9.19 20.369H5.44v-3.75M10.69 15.119l-5.25 5.25M20.44 16.619v3.75h-3.75M15.19 15.119l5.25 5.25M5.44 9.119v-3.75h3.75M10.69 10.619l-5.25-5.25"
    />
  </svg>
)
export default SvgArrowsOut
