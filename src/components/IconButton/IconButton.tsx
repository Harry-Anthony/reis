import { IconType } from '../../types/icon-types'
import { Icon } from '../icons/Icon'

type IconButtonProps = {
  icon: IconType
  onClick?: () => void
}
export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="text-primary-500 cursor-pointer bg-primary-50 rounded-[2.14px] p-[0.2675rem] flex justify-center items-center"
    >
      <Icon width={21.41} height={21.41} icon={icon} />
    </div>
  )
}
