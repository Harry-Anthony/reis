import React, { SVGProps } from 'react'
import { IconType } from '../../types/icon-types'
import * as Icons from './index'

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType
}
export const Icon = ({ icon, ...props }: IconProps) => {
  const Component = React.createElement(Icons[icon], props)
  return Component
}
