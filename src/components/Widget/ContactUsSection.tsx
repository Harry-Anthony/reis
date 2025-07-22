import { centeredBgImage } from '../../tools/cssProperties'
import { Button } from '../Button/Button'
import { SectionTitle, SectionTitleProps } from '../SectionTitle/SectionTitle'

interface Props extends SectionTitleProps {
  cover: string
}
export const ContactUsSection = ({ title, subtitle, cover }: Props) => {
  return (
    <div
      className={`w-full`}
      style={centeredBgImage(cover)}
    >
      <div className="flex flex-col items-center bg-primary-blue/[80%] py-37.5">
        <SectionTitle variant="secondary" title={title} subtitle={subtitle} />
        <Button variant={'outline'} title={'Contact Us'} customStyle="mt-8" />
      </div>
    </div>
  )
}
