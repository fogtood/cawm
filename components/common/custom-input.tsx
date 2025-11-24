import { useState } from 'react'
import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'

interface CustomInputProps {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  placeholder: string
}

const CustomInput = ({ name, label, type, placeholder }: CustomInputProps) => {
  const [selected, setSelected] = useState('')

  return (
    <Field className="gap-2">
      <FieldLabel htmlFor={name} className="gap-1 text-sm font-medium text-[#374151]">
        {label}
        <span className="text-red-500">*</span>
      </FieldLabel>
      {type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={8}
          required
          className="min-h-30 rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      ) : type === 'select' ? (
        <>
          <Select onValueChange={setSelected}>
            <SelectTrigger className="h-full! rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-none text-[#575756]">
              {[
                { value: 'Volunteering', title: 'Volunteering' },
                { value: 'Prayer Request', title: 'Prayer Request' },
                { value: 'General Enquiry', title: 'General Enquiry' },
                { value: 'Media Resources', title: 'Media & Resources' },
              ].map(({ value, title }) => (
                <SelectItem key={value} value={value} className="rounded-none">
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name={name} value={selected} required />
        </>
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="h-auto rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      )}
    </Field>
  )
}

export default CustomInput
