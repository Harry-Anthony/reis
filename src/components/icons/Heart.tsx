import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.485 18.977S3.12 14.293 3.12 8.605a4.35 4.35 0 0 1 8.365-1.673v0a4.35 4.35 0 0 1 8.365 1.673c0 5.688-8.365 10.372-8.365 10.372"
    />
  </svg>
)
export default SvgHeart
