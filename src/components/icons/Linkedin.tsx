import * as React from 'react'
import type { SVGProps } from 'react'
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="currentColor"
        d="M.438 2.427q0-.865.578-1.427.579-.562 1.505-.562.909 0 1.47.553.58.57.58 1.488 0 .83-.563 1.383-.579.571-1.52.571H2.47q-.909 0-1.471-.57Q.438 3.29.438 2.427m.215 15.135V6.007h3.67v11.555zm5.702 0h3.67V11.11q0-.606.132-.934.23-.588.703-.995.471-.405 1.181-.406 1.852 0 1.852 2.612v6.175h3.67v-6.625q0-2.56-1.158-3.883-1.156-1.323-3.058-1.323-2.132 0-3.322 1.92v.034h-.017l.017-.034V6.007h-3.67q.033.555.033 3.442 0 2.889-.033 8.113"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="currentColor" d="M.438.438h17.124v17.124H.438z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgLinkedin
