import { motion, useScroll, useTransform } from 'motion/react'
import { Icon } from '../../icons/Icon'
import { SocialMediaCard } from '../../SocialMediaCard/SocialMediaCard'
import { Typography } from '../../Typography/Typography'

function TopBar() {
  const { scrollY } = useScroll();
  const value = useTransform(
    scrollY,
    [0, 100, 200],
    ['rgba(44, 58, 97, 0)', 'rgba(44, 58, 97, 0.5)', 'rgba(44, 58, 97, 1)']
  )
  const height = useTransform(
    scrollY,
    [0, 50, 100],
    ['max-content', '30px', '0px']
  )

  const paddingVert = useTransform(
    scrollY,
    [0, 100],
    ['17px', '0px']
  )


  return (
    <motion.div
      style={{
        backgroundColor: value,
        height,
        paddingTop: paddingVert,
        paddingBottom: paddingVert
      }}
      className="hidden lg:flex overflow-hidden flex flex-row w-full justify-between py-5 items-start border-b-[0.5px] px-12.5 border-[#dbdfec80] xl:px-25"
    >
      <div className="flex flex-row items-center text-white">
        <Icon
          className="mr-[12px]"
          width={28}
          height={28}
          icon="EnvelopeOpen"
        />
        <Typography variant="bodys1" className="font-bold">
          Email us at :
        </Typography>
        <Typography variant="bodys3">&nbsp;example@mail.com</Typography>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <SocialMediaCard
            customClass="mx-2"
            icon={'Facebook'}
            variant={'secondary'}
          />
          <SocialMediaCard
            customClass="mx-2"
            icon={'Dribble'}
            variant={'secondary'}
          />
          <SocialMediaCard
            customClass="mx-2"
            icon={'Linkedin'}
            variant={'secondary'}
          />
          <SocialMediaCard
            customClass="mx-2"
            icon={'Insta'}
            variant={'secondary'}
          />
          <SocialMediaCard
            customClass="mx-2"
            icon={'Be'}
            variant={'secondary'}
          />
        </div>
        <div className="flex flex-row pt-[6px] pb-[9px] pl-6 border-l border-white mt-[3px] ml-6">
          <Icon
            className="mr-[12px] text-[white]"
            width={24}
            height={24}
            icon="Phone"
          />
          <Typography className="text-[white]" variant="bodys3">
            123-4567 890
          </Typography>
        </div>
      </div>
    </motion.div>
  )
}

export default TopBar
