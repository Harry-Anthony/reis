import { Button } from '../../Button/Button'
import { SelectListBlock } from '../SelectListBlock/SelectListBlock'

type SelectGroupProps = {}
export const SelectGroup = ({}: SelectGroupProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center bg-gray-white py-8 rounded-lg">
      <SelectListBlock
        title={'Select your city'}
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
        sectionTitle={'Locations'}
        customStyle="lg:pr-14.75 lg:ml-15.5 mx-5"
      />
      <SelectListBlock
        title={'Select rent type'}
        customStyle="lg:px-10.75 mx-5"
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
      <SelectListBlock
        customStyle="lg:px-14 mx-5"
        title={'Select rent range'}
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
        sectionTitle={'Rant range'}
      />
      <Button customStyle="lg:mx-21.5 mx-5" variant={'contained'} title={'Search'} />
    </div>
  )
}
