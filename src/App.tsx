import './App.css'
import { AppLogo } from './components/AppLogo/AppLogo'
import { BentoCard } from './components/BentoCard/BentoCard'
import { Button } from './components/Button/Button'
import { FeatureCard } from './components/FeatureCard/FeatureCard'
import { FooterItem } from './components/FooterItem/FooterItem'
import { ProductCard } from './components/ProductCard/ProductCard'
import { RentCard } from './components/RentCard/RentCard'
import { SocialMediaCard } from './components/SocialMediaCard/SocialMediaCard'
import { baseClassNames, Typography } from './components/Typography/Typography'
import { BentoGrid } from './components/Widget/BentoGrid/BentoGrid'
import { ContactUsSection } from './components/Widget/ContactUsSection'
import { FeatureSection } from './components/Widget/FeatureSection/FeatureSection'
import { FooterSection } from './components/Widget/FooterSection/FooterSection'
import { Hero } from './components/Widget/Hero/Hero'
import { ProductSection } from './components/Widget/ProductSection/ProductSection'
import { SelectListBlock } from './components/Widget/SelectListBlock/SelectListBlock'

const container = 'w-[40px] h-[40px] rounded-sm'

function App() {
  return (
    <div>
      <Hero />
      <BentoGrid
        title={'Propertice by Area'}
        subtitle={
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
        }
      />
      <FeatureSection
        title={'Propertice by Area'}
        subtitle={
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
        }
      />
      <ProductSection
        title={'Letest Properties of Rent'}
        subtitle={
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
        }
      />
      <ContactUsSection
        cover={
          'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg'
        }
        title={'Find Best Place For Living'}
        subtitle={
          `Spend vacations in best hotels and resorts find the great place of your
choice using different searching options.`        }
      />
      <FooterSection />

      {/* {Object.keys(baseClassNames).map((el: any, index) => {
        return (
          <Typography key={index} variant={el}>
            {el}
          </Typography>
        )
      })}
      <SocialMediaCard icon={'Dribble'} variant={'primary'} />
      <SocialMediaCard icon={'Facebook'} variant={'primary'} />
      <SocialMediaCard icon={'Linkedin'} variant={'primary'} />
      <SocialMediaCard icon={'Insta'} variant={'primary'} />
      <SocialMediaCard icon={'Be'} variant={'primary'} />

      <div className="flex flex-row ">
        <div className={`${container} bg-primary-900`} />
        <div className={`${container} bg-primary-800`} />
        <div className={`${container} bg-primary-700`} />
        <div className={`${container} bg-primary-600`} />
        <div className={`${container} bg-primary-500`} />
        <div className={`${container} bg-primary-400`} />
        <div className={`${container} bg-primary-300`} />
        <div className={`${container} bg-primary-200`} />
        <div className={`${container} bg-primary-100`} />
        <div className={`${container} bg-primary-50]`} />
      </div>
      <div className="bg-primary-700 flex flex-row">
        <Button variant={'outline'} title={'Add Listing'} />
        <Button variant={'contained'} title={'Add Listing'} />
        <Button variant={'contained'} title={'Search'} />
        <Button variant={'primary'} title={'Search'} />
        <Button variant={'active'} isActive title={'Search'} />
        <AppLogo />
      </div>
      <SelectListBlock
        title={'Select rent type'}
        options={[
          {
            id: 1,
            value: 'test fdsqfds fdsq fsqf dsqf ds fsd fds dsfdsfdsfsdfdsfs',
          },
          {
            id: 2,
            value: 'test 1',
          },
        ]}
        sectionTitle={'Property Type'}
      />
      <FeatureCard
        icon={'ArrowLeft'}
        title={'Sell your home'}
        subtitle={
          'We do a free evaluation to be sure you want to start selling.'
        }
      />
      <ProductCard
        car={4}
        bath={4}
        title={'92 ALLIUM PLACE, ORLANDO FL 32827'}
        price={'590,693'}
        avatar={
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'
        }
        ownerName={'Jenny Wilson'}
        area={'2,096.00 ft'}
        cover={
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'
        }
      />
      <RentCard
        tag="Hot offer"
        location={'12000'}
        size={0}
        cover={
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'
        }
      />
      <FooterItem
        title="Title Footer"
        items={[
          'test oteù',
          'test oteù',
          'test oteù',
          'test oteù',
          'test oteù',
        ]}
      /> */}
      {/* <div className="parent">
        <div className="child">Static</div>
        <div className="moved child">Moved</div>
      </div> */}
    </div>
  )
}

export default App
