import { createPortal } from 'react-dom'
import { NavBar } from '../NavBar/NavBar'
import TopBar from '../TopBar/TopBar'

type Props = {
  hidden?: boolean
}
export const Header = ({ hidden }: Props) => {
  return createPortal(
    <div className="fixed z-22 w-full">
      <TopBar />
      <NavBar />
    </div>,
    document.getElementById('header') as any
  )
}
