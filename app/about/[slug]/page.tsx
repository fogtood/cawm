import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/live'
import { client } from '@/lib/sanity.client'
import { dynamicPageBySlugQuery, allDynamicPagesQuery } from '@/lib/sanity.queries'
import { DynamicPage } from '@/sanity.types'
import AboutTemplate from '@/components/common/about-template'
import YouthTemplate from '@/components/common/youth-template'
import BasicTemplate from '@/components/common/basic-template'

// Generate static params for all dynamic pages
export async function generateStaticParams() {
  const pages = await client.fetch(allDynamicPagesQuery)

  return pages.map((page: { slug: string }) => ({
    slug: page.slug,
  }))
}

export default async function DynamicPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: page } = (await sanityFetch({
    query: dynamicPageBySlugQuery,
    params: { slug },
  })) as { data: DynamicPage | null }

  if (!page) {
    notFound()
  }

  // Render based on template
  switch (page.template) {
    case 'about':
      return <AboutTemplate page={page} />
    case 'youth':
      return <YouthTemplate page={page} />
    case 'basic':
      return <BasicTemplate page={page} />
    default:
      return <BasicTemplate page={page} />
  }
}

// Generate metadata
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params

//   const { data: page } = (await sanityFetch({
//     query: dynamicPageBySlugQuery,
//     params: { slug },
//   })) as { data: DynamicPage | null }

//   if (!page) {
//     return {}
//   }

//   return {
//     title: page.seo?.metaTitle || page.title,
//     description: page.seo?.metaDescription || page.aboutSection?.aboutText,
//   }
// }
