import {
  SelectListBox,
  SelectListBoxProps,
} from '../../SelectListBox/SelectListBox'
import { Typography } from '../../Typography/Typography'

interface SelectListBlockProps extends SelectListBoxProps {
  sectionTitle: string
  customStyle?: string
}
export const SelectListBlock = ({
  options,
  title,
  sectionTitle,
  customStyle,
}: SelectListBlockProps) => {
  return (
    <div className={`border-r border-gray-100 ${customStyle || ''}`}>
      <Typography variant="h5" className="text-primary-700 mb-4 block">
        {sectionTitle}
      </Typography>
      <SelectListBox title={title} options={options} />
    </div>
  )
}
