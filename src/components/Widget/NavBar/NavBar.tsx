import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AppLogo } from '../../AppLogo/AppLogo'
import { Button } from '../../Button/Button'
import { NavBarItem } from '../../NavBarItem/NavBarItem'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { circOut, motion, useScroll, useTransform } from 'motion/react'

type NavBarProps = {}

const Nav = ({ lg = true }: { lg?: boolean }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem isActive title={'Home'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'about us'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'our agents'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'properties'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'gallery'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'blog'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'contact us'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <NavBarItem title={'search'} />
      </PopoverButton>
      <PopoverButton className={'py-3 px-5 lg:p-0'}>
        <Button variant={lg ? 'outline' : 'contained'} title={'Add Listing'} />
      </PopoverButton>
    </div>
  )
}

export const NavBar = ({}: NavBarProps) => {
  const { scrollY } = useScroll()
  const value = useTransform(
    scrollY,
    [0, 100, 200],
    ['rgba(44, 58, 97, 0)', 'rgba(44, 58, 97, 0.5)', 'rgba(44, 58, 97, 1)'],
    { ease: circOut }
  )
  console.log('scrollY ', scrollY)
  return (
    <motion.nav
      style={{
        background: value,
      }}
      className="relative text-primary-500 lg:text-white"
    >
      <Popover>
        <div className="flex flex-row justify-between items-center px-12.5 xl:px-25 py-[25px]">
          <AppLogo />
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="lg:hidden">
            <PopoverButton className={'outline-none'}>
              <Bars3Icon
                width={35}
                color="white"
                className="hover:text-primary-800 cursor-pointer"
              />
            </PopoverButton>
          </div>
        </div>
        <PopoverPanel className="absolute bg-primary-50 top-0 w-full py-6">
          <div className="flex justify-between m-6">
            <AppLogo variant="secondary" />
            <PopoverButton>
              <XMarkIcon className="text-primary-500" width={24} />
            </PopoverButton>
          </div>
          <Nav lg={false} />
        </PopoverPanel>
      </Popover>
    </motion.nav>
  )
}
