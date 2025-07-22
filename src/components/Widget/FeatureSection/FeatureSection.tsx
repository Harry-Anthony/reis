import { FeatureCard } from '../../FeatureCard/FeatureCard'
import {
  SectionTitle,
  SectionTitleProps,
} from '../../SectionTitle/SectionTitle'

interface Props extends SectionTitleProps {}
export const FeatureSection = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col py-25 items-center bg-primary-50">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="flex flex-wrap justify-center">
        <FeatureCard
          icon={'Home'}
          title={'Sell your home'}
          subtitle={
            'We do a free evaluation to be sure you want to start selling.'
          }
        />
        <FeatureCard
          icon={'RentHome'}
          title={'Sell your home'}
          subtitle={
            'We do a free evaluation to be sure you want to start selling.'
          }
        />
        <FeatureCard
          icon={'BuyHome'}
          title={'Sell your home'}
          subtitle={
            'We do a free evaluation to be sure you want to start selling.'
          }
        />
        <FeatureCard
          icon={'SearchHome'}
          title={'Sell your home'}
          subtitle={
            'We do a free evaluation to be sure you want to start selling.'
          }
        />
      </div>
    </div>
  )
}
