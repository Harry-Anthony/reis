import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { ListBoxOption } from './ListBoxOption'
import { Typography } from '../Typography/Typography'

export interface SelectOption {
  id: number
  value: string
}

export type SelectListBoxProps = {
  title: string
  options: SelectOption[]
}
export const SelectListBox = ({ title, options }: SelectListBoxProps) => {
  const [selected, setSelected] = useState<SelectOption>()

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        if (selected?.id === value.id) {
          setSelected(undefined)
        } else {
          setSelected(value)
        }
      }}
    >
      <ListboxButton className="outline-none relative block max-w-47 flex flex-row items-center font-[400] text-lg text-gray-400">
        <Typography variant="bodyreg3" className="line-clamp-1 text-start">
          {selected?.value || title}
        </Typography>
        <ChevronDownIcon className="size-6 shrink-0 text-primary-500 ml-2" />
      </ListboxButton>
      <ListboxOptions
        className="outline-none relative z-11 w-52 rounded-sm border border-gray-50 bg-white p-1"
        anchor="bottom"
      >
        {options.map((item, index) => {
          return (
            <ListBoxOption
              isActive={item.id === selected?.id}
              option={item}
              key={index}
            />
          )
        })}
      </ListboxOptions>
    </Listbox>
  )
}
