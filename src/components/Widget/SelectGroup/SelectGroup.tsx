import { Button } from '../../Button/Button'
import { SelectListBlock } from '../SelectListBlock/SelectListBlock'

type SelectGroupProps = {}
export const SelectGroup = ({}: SelectGroupProps) => {
  return (
    <div className="flex flex-row items-center bg-gray-white py-8 rounded-lg">
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
        customStyle="pr-14.75 ml-15.5"
      />
      <SelectListBlock
        title={'Select rent type'}
        customStyle="px-10.75"
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
        customStyle="px-14"
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
      <Button customStyle="mx-21.5" variant={'contained'} title={'Search'} />
    </div>
  )
}
