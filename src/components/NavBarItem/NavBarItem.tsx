import { Typography } from '../Typography/Typography'

type NavBarItemProps = {
  isActive?: boolean
  title: string
}
export const NavBarItem = ({ isActive, title }: NavBarItemProps) => {
  return (
    <Typography
      variant={isActive ? 'bodys1' : 'bodys3'}
      className="uppercase py-3 px-5 xl:px-6 cursor-pointer"
    >
      {title}
    </Typography>
  )
}
