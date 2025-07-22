import { IconType } from '../../types/icon-types'
import { Icon } from '../icons/Icon'
import { Typography } from '../Typography/Typography'

type Props = {
  icon: IconType
  text: string
  variant?: 'primary' | 'secondary'
}
export const IconText = ({ icon, text, variant = 'primary' }: Props) => {
  return (
    <div
      className={`flex ${variant === 'primary' ? 'text-gray-500' : 'text-white'} items-center`}
    >
      <Icon width={24} height={24} icon={icon} />
      <Typography className="ml-[0.4rem]" variant="bodyreg2">
        {text}
      </Typography>
    </div>
  )
}
