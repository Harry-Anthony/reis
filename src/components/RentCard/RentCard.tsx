import { useState } from 'react'
import { Button } from '../Button/Button'
import { IconText } from '../IconText/IconText'
import { Tag } from '../Tag/Tag'
import { centeredBgImage } from '../../tools/cssProperties'

type RentCardProps = {
  location: string
  size: number
  tag?: string
  cover: string
}
export const RentCard = ({ cover, location, size, tag }: RentCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-[0.375rem] bg-cover w-[312px] h-[425px]`}
      style={centeredBgImage(cover)}
    >
      <div className="rounded-[0.375rem] absolute z-1 w-full h-full bg-linear-to-b from-primary-600/[20%] from-20% to-primary-600 to-100% opacity-80" />
      <div className="flex p-6 flex-col justify-between absolute z-2 w-full h-full">
        <div className="self-start">{tag && <Tag title={tag} />}</div>
        <div className="flex justify-between">
          <IconText variant="secondary" icon="MapPin" text={location} />
          <IconText variant="secondary" icon="ArrowsOut" text={size + ''} />
        </div>
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
