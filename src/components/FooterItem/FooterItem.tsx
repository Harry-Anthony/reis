import { Typography } from '../Typography/Typography'

type FooterItemProps = {
  items: string[]
  title: string
}
export const FooterItem = ({ items, title }: FooterItemProps) => {
  return (
    <div>
      <Typography variant="h4" className="mb-8 block">
        {title}
      </Typography>
      <div className="flex flex-col gap-y-4">
        {items.map((item, index) => {
          return (
            <Typography
              key={index + ''}
              variant="bodyreg3"
              className="text-gray-500"
            >
              {item}
            </Typography>
          )
        })}
      </div>
    </div>
  )
}
