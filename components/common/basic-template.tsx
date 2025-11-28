import Bg from '@/components/common/bg'
import { urlFor } from '@/lib/sanity.image'
import { DynamicPage } from '@/sanity.types'
import { PortableText } from '@portabletext/react'

interface BasicTemplateProps {
  page: DynamicPage
}

export default function BasicTemplate({ page }: BasicTemplateProps) {
  return (
    <div>
      <Bg
        title={page.hero?.title || page.title || ''}
        subtitle={page.hero?.subtitle || ''}
        background={
          page.hero?.backgroundImage ? urlFor(page.hero.backgroundImage).url() : '/images/hero.png'
        }
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {page.aboutSection?.title || page.title}
        </h1>

        {page.aboutSection?.aboutText && (
          <p
            className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {page.aboutSection.aboutText}
          </p>
        )}

        {page.contentBlocks && page.contentBlocks.length > 0 && (
          <div
            className="prose prose-lg my-8 max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <PortableText value={page.contentBlocks} />
          </div>
        )}
      </section>
    </div>
  )
}
