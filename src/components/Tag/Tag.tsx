import { Typography } from '../Typography/Typography'

type TagProps = {
  title: string
}
export const Tag = ({ title }: TagProps) => {
  return (
    <div
      className={`font-inter text-[0.934375rem] px-[12.82px] py-[4.27px] rounded-xs bg-primary-500 text-white`}
    >
      {title}
    </div>
  )
}
