import { Button } from '../../Button/Button'
import { ProductCard } from '../../ProductCard/ProductCard'
import {
  SectionTitle,
  SectionTitleProps,
} from '../../SectionTitle/SectionTitle'

interface ProductSectionProps extends SectionTitleProps {}
export const ProductSection = ({ title, subtitle }: ProductSectionProps) => {
  return (
    <div className="flex flex-col py-25 items-center">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid grid-cols-3 gap-6">
        <ProductCard
          car={4}
          bath={4}
          title={'92 ALLIUM PLACE, ORLANDO FL 32827'}
          price={'590,693'}
          avatar={
            'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          ownerName={'Jenny Wilson'}
          area={'2,096.00 ft'}
          cover={
            'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            'https://images.pexels.com/photos/273244/pexels-photo-273244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            'https://images.pexels.com/photos/273661/pexels-photo-273661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        />
      </div>
      <Button
        variant={'contained'}
        title={'Load more listing'}
        customStyle="mt-8"
      />
    </div>
  )
}