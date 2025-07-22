import { IconType } from '../../types/icon-types'
import { Icon } from '../icons/Icon'

type SocialMediaCardProps = {
  icon: IconType
  variant: 'primary' | 'secondary'
  customClass?: string
}

export const SocialMediaCard = ({
  icon,
  variant,
  customClass,
}: SocialMediaCardProps) => {
  const variants = {
    primary: 'w-[48px] h-[48px] bg-primary-50',
    secondary: 'w-[40px] h-[40px]',
  }
  const className = variants[variant]
  const size = variant === 'primary' ? 20 : 18
  return (
    <div
      className={`${className} flex rounded-sm justify-center items-center ${customClass || ''}`}
    >
      <Icon
        width={size}
        height={size}
        icon={icon}
        className={
          variant === 'secondary' ? 'text-[white]' : 'text-primary-500'
        }
      />
    </div>
  )
}
