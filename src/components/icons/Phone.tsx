import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.672 11.7a7.84 7.84 0 0 0 3.656 3.647.75.75 0 0 0 .74-.056l2.345-1.566a.74.74 0 0 1 .712-.066l4.387 1.885a.74.74 0 0 1 .45.778A4.5 4.5 0 0 1 16.5 20.25 12.75 12.75 0 0 1 3.75 7.5a4.5 4.5 0 0 1 3.928-4.462.74.74 0 0 1 .778.45l1.885 4.396a.75.75 0 0 1-.057.704l-1.565 2.38a.75.75 0 0 0-.047.732"
    />
  </svg>
)
export default SvgPhone
