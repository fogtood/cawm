import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="h-16 w-auto"
        priority
      />
    </Link>
  )
}

export default Brand
