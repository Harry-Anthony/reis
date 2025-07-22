import { IconButton } from '../IconButton/IconButton'
import { IconText } from '../IconText/IconText'
import { Typography } from '../Typography/Typography'

type ProductCardProps = {
  car: number
  bath: number
  title: string
  price: string
  avatar: string
  ownerName: string
  tags?: string[]
  area: string
  cover: string
}
export const ProductCard = ({
  cover,
  title,
  price,
  car,
  bath,
  avatar,
  ownerName,
  area,
}: ProductCardProps) => {
  return (
    <div className="w-[22.8vw] min-w-[312px] shadow-lg shadow-primary-50 rounded-[0.4rem]">
      <img
        src={cover}
        className="w-full object-cover h-[240.91px] rounded-t-[0.4rem]"
        alt=""
      />
      <div className="flex flex-col gap-4.25 px-6 py-6">
        <span className="font-inter text-[1.338125rem] line-clamp-2">{title}</span>
        <Typography
          className="block text-primary-500 my-4.2825"
          variant="bodyl1"
        >
          $ {price}
        </Typography>
        <div className="flex gap-6.5">
          <IconText icon={'Car'} text={car + ''} />
          <IconText icon={'Bathtub'} text={bath + ''} />
          <IconText icon={'ArrowsOut'} text={area} />
        </div>
        <div className="w-full h-[1.07px] bg-gray-50" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={avatar}
              className="w-[42px] object-cover h-[42px] rounded-full"
              alt=""
            />
            <Typography
              className="text-gray-700 ml-[0.5625rem]"
              variant={'bodyl2'}
            >
              {ownerName}
            </Typography>
          </div>
          <div className="flex gap-3.25">
            <IconButton icon="ShareNetwork" />
            <IconButton icon="Heart" />
            <IconButton icon="Plus" />
          </div>
        </div>
      </div>
    </div>
  )
}
