import { Button } from '../../Button/Button'
import { Typography } from '../../Typography/Typography'
import { Header } from '../Header/Header'
import { SelectGroup } from '../SelectGroup/SelectGroup'

type Props = {}
export const Hero = ({ }: Props) => {
  return (
    <div className='relative'>
      <div className="bg-cover bg-center bg-no-repeat w-full bg-[url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg)]">
        <div className="z-9 relative flex flex-col bg-[rgba(6,48,83,0.6)]">
          <Header />
          <div className="flex flex-col max-w-[696px] self-center text-center mt-79.25 mb-70.75">
            <Typography variant="display" className="text-white">
              Find Your Dream Home
            </Typography>
            <Typography variant="bodyl3" className="text-primary-50 mt-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Typography>
          </div>
        </div>
      </div>
      <div className="-mt-33.25 relative z-10 flex flex-col items-center">
        <div className=" flex justify-center flex-row gap-[10px]">
          <Button variant={'active'} isActive title={'Rent'} />
          <Button variant={'primary'} title={'Sale'} />
        </div>
        <div className="relative">
          <div
            className="-z-1 absolute h-[34px] w-[1200px] bg-primary-400 blur-[50px]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <SelectGroup />
        </div>
      </div>
    </div>
  )
}
