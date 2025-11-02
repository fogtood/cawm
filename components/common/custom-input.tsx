import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'

interface CustomInputProps {
  name: string
  label: string
  type: string
  placeholder: string
}

const CustomInput = ({ name, label, type, placeholder }: CustomInputProps) => {
  return (
    <Field className="gap-2">
      <FieldLabel htmlFor={name} className="gap-1 text-sm font-medium text-[#374151]">
        {label}
        <span className="text-red-500">*</span>
      </FieldLabel>
      {type === 'textarea' ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          rows={30}
          className="min-h-30 rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      ) : type === 'select' ? (
        <Select>
          <SelectTrigger className="h-full! rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="text-[#575756]">
            <SelectItem value="volunteering">Volunteering</SelectItem>
            <SelectItem value="prayer-request">Prayer Request</SelectItem>
            <SelectItem value="general-enquiry">General Enquiry</SelectItem>
            <SelectItem value="media-resources">Media & Resources</SelectItem>
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          className="h-auto rounded-none border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      )}
    </Field>
  )
}

export default CustomInput
