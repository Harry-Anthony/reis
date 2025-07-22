import { useState } from 'react'
import { Button } from '../Button/Button'
import { Icon } from '../icons/Icon'
import { Typography } from '../Typography/Typography'
import { centeredBgImage } from '../../tools/cssProperties'

type BentoCardProps = {
  cover: string
  title: string
  subtitle: string
  customClass?: string
}
export const BentoCard = ({
  cover,
  title,
  subtitle,
  customClass = '',
}: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"relative text-white rounded-lg bg-cover h-[241px]"}
      style={centeredBgImage(cover)}
    >
      <div className="absolute z-1 w-full h-full rounded-lg bg-linear-to-b from-primary-600 from-0% to-primary-600/[0%] to-100% opacity-70" />
      <div className="absolute z-2 flex flex-col h-full justify-between p-6">
        <div className="flex flex-col">
          <Typography variant="h4">{title}</Typography>
          <Typography className="mt-2.75" variant="bodyreg3">
            {subtitle}
          </Typography>
        </div>
        <Icon icon="MapPin" width={24} />
      </div>
      {isHovered && (
        <div
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute z-3"
        >
          <Button variant={'outline'} title={'View Detail'} />
        </div>
      )}
    </div>
  )
}
