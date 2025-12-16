import { PortableText } from '@portabletext/react'

const ContactInfo = ({ title, subtitle, icon }: {title: string, subtitle: any, icon: React.ReactNode}) => {
  const isPortableText = Array.isArray(subtitle)
  
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-[#E8E7F6] [&>svg]:size-6 [&>svg]:text-[#393798]">
        {icon}
      </span>

      <div className="max-w-sm space-y-1">
        <h2 className="text-base font-semibold text-[#111827]">{title}</h2>

        <div className="text-sm text-[#4B5563]">
          {isPortableText ? (
            <PortableText value={subtitle} />
          ) : (
            <p>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
