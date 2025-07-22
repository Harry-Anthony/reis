import * as React from 'react'
import type { SVGProps } from 'react'
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.303 12.045h22.485M23.182 18.47v2.409a.803.803 0 0 1-.803.803h-2.41a.803.803 0 0 1-.802-.803v-2.41M7.924 18.47v2.409a.803.803 0 0 1-.803.803H4.712a.803.803 0 0 1-.803-.803v-2.41M7.121 15.258h1.606M18.364 15.258h1.606"
    />
    <path
      stroke="#6D737A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.606}
      d="M23.182 12.045 20.18 5.3a.8.8 0 0 0-.733-.482H7.643a.8.8 0 0 0-.733.482l-3 6.745v6.425h19.272z"
    />
  </svg>
)
export default SvgCar
