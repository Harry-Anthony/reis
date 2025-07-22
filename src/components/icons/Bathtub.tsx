import * as React from 'react'
import type { SVGProps } from 'react'
const SvgBathtub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 26"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M7.742 19.273v2.409M18.985 19.273v2.409M6.136 10.44V5.22a2.008 2.008 0 0 1 4.016 0M20.59 9.636h-6.423v4.819h6.424z"
    />
    <path
      stroke="#6D737A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M20.59 10.44h3.213a.803.803 0 0 1 .803.803v3.212a4.82 4.82 0 0 1-4.818 4.818H6.939a4.82 4.82 0 0 1-4.818-4.818v-3.213a.803.803 0 0 1 .803-.803h11.243"
    />
  </svg>
)
export default SvgBathtub
