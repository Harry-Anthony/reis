import { IconType } from '../../types/icon-types'
import { Icon } from '../icons/Icon'
import { Typography } from '../Typography/Typography'

type FeatureCardProps = {
  icon: IconType
  title: string
  subtitle: string
}
export const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => {
  return (
    <div className="duration-300 hover:drop-shadow-xl drop-shadow-primary-50 flex flex-col hover:bg-white gap-6 rounded-sm w-[312px] p-5.5">
      <Icon width={78} height={78} icon={icon} />
      <Typography variant="h4">{title}</Typography>
      <Typography variant="bodyreg3" className="text-gray-400">
        {subtitle}
      </Typography>
      <Typography
        variant="bodyreg3"
        className="text-primary-500 cursor-pointer"
      >
        Read more
      </Typography>
    </div>
  )
}
