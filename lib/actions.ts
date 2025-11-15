'use server'

import {
  homePageQuery,
  homeSermonsQuery,
  homeServicesQuery,
  valuesQuery,
  homeUpcomingEventsQuery,
  testimonialsQuery,
} from '@/lib/sanity.queries'
import type { Event, HomePage, Sermon, Service, Testimonial, Values } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export async function fetchHomePageData(): Promise<{
  homePage: HomePage | null
  sermons: Sermon[]
  services: Service[]
  values: Values | null
  events: Event[]
  testimonials: Testimonial[]
}> {
  const [
    { data: homePage },
    { data: sermons },
    { data: services },
    { data: values },
    { data: events },
    { data: testimonials },
  ] = (await Promise.all([
    sanityFetch({ query: homePageQuery }),
    sanityFetch({ query: homeSermonsQuery }),
    sanityFetch({ query: homeServicesQuery }),
    sanityFetch({ query: valuesQuery }),
    sanityFetch({ query: homeUpcomingEventsQuery }),
    sanityFetch({ query: testimonialsQuery }),
  ])) as [
    { data: HomePage | null },
    { data: Sermon[] },
    { data: Service[] },
    { data: Values | null },
    { data: Event[] },
    { data: Testimonial[] },
  ]

  return { homePage, sermons, services, values, events, testimonials }
}
