import { AppLogo } from '../../AppLogo/AppLogo'
import { FooterItem } from '../../FooterItem/FooterItem'
import { SocialMediaCard } from '../../SocialMediaCard/SocialMediaCard'
import { Typography } from '../../Typography/Typography'

type Props = {}
export const FooterSection = ({}: Props) => {
  return (
    <div className="flex sm:flex-row flex-col flex-wrap lg:justify-center px-15 sm:gap-[12.1875rem] gap-6 w-full pt-25 pb-12.5">
      <div className="flex flex-col w-[312px]">
        <AppLogo variant="secondary" />
        <Typography variant="h4" className="text-gray-black mt-6">
          Contact Us
        </Typography>
        <div className="flex flex-col my-4">
          <Typography variant="bodyreg3" className="text-gray-500 mb-2">
            Call : +123 400 123
          </Typography>
          <Typography variant="bodyreg3" className="text-gray-500">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </Typography>
        </div>
        <Typography variant="bodyreg3" className="text-gray-700">
          Email: example@mail.com
        </Typography>
        <div className="flex justify-between mt-4">
          <SocialMediaCard icon={'Facebook'} variant={'primary'} />
          <SocialMediaCard icon={'Dribble'} variant={'primary'} />
          <SocialMediaCard icon={'Linkedin'} variant={'primary'} />
          <SocialMediaCard icon={'Insta'} variant={'primary'} />
          <SocialMediaCard icon={'Be'} variant={'primary'} />
        </div>
      </div>
      <FooterItem
        title="Features"
        items={[
          'Home',
          'Become a Host',
          'Pricing',
          'Blog',
          'Contact',
        ]}
      />
      <FooterItem
        title="Company"
        items={[
          'About Us',
          'Press',
          'Contact',
          'Careers',
          'Blog',
        ]}
      />
      <FooterItem
        title="Team and policies"
        items={[
          'Terms of servies',
          'Privacy Policy',
          'Security',
        ]}
      />
    </div>
  )
}
