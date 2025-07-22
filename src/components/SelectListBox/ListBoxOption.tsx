import { ListboxOption as HeadlessListBoxOption } from '@headlessui/react'
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/20/solid'
import { SelectOption } from './SelectListBox'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  isActive?: boolean
  option: SelectOption
}
export const ListBoxOption = ({ isActive, option }: Props) => {
  return (
    <HeadlessListBoxOption
      value={option}
      className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
    >
      {isActive ? (
        <CheckCircleIconSolid className="size-6 text-primary-500 shrink-0" />
      ) : (
        <CheckCircleIcon className="size-6 text-primary-500 shrink-0" />
      )}
      <div className="text-sm/6 text-primary-500">{option.value}</div>
    </HeadlessListBoxOption>
  )
}
