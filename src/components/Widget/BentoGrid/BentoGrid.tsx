import { BentoCard } from '../../BentoCard/BentoCard'
import {
  SectionTitle,
  SectionTitleProps,
} from '../../SectionTitle/SectionTitle'

interface BentoGridProps extends SectionTitleProps { }
export const BentoGrid = ({ title, subtitle }: BentoGridProps) => {
  return (
    <div className="px-5 sm:px-30 xl:px-75 py-25 flex flex-col items-center">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 flex flex-col w-full gap-6">
        <BentoCard
          cover={
            'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          title={'Washington'}
          subtitle={'25 listings'}
        />
        <BentoCard
          cover={
            'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          title={'Washington'}
          subtitle={'25 listings'}
        />
        <BentoCard
          cover={
            'https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          title={'Washington'}
          subtitle={'25 listings'}
        />
        <div className="md:col-span-2">
          <BentoCard
            cover={
              'https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            title={'Washington'}
            subtitle={'25 listings'}
          />
        </div>

        <BentoCard
          cover={
            'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          title={'Washington'}
          subtitle={'25 listings'}
        />{' '}
      </div>
    </div>
  )
}
