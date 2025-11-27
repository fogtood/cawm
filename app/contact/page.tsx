import Bg from '@/components/common/bg'
import ContactInfo from '@/components/common/contact-info'
import { urlFor } from '@/lib/sanity.image'
import { contactPageQuery, generalSettingsQuery } from '@/lib/sanity.queries'
import { ContactPage, GeneralSettings } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import { Mail, MapPin, Phone } from 'lucide-react'

import CustomForm from '@/components/common/custom-form'

export default async function Contact() {
  const [{ data: contactPage }, { data: generalSettings }] = await Promise.all([
    sanityFetch({ query: contactPageQuery }) as Promise<{ data: ContactPage }>,
    sanityFetch({ query: generalSettingsQuery }) as Promise<{ data: GeneralSettings }>,
  ])

  return (
    <div>
      <Bg
        title={contactPage?.hero?.title || 'Contact Us'}
        subtitle={
          contactPage?.hero?.subtitle || 'Get in touch with us for any inquiries or support'
        }
        background={
          contactPage?.hero?.backgroundImage
            ? urlFor(contactPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <div className="container mx-auto my-20 grid grid-cols-1 justify-between gap-10 px-4 md:grid md:grid-cols-2 md:gap-15 md:px-6 lg:gap-20">
        <div className="space-y-12" data-aos="fade-right" data-aos-duration="800">
          <div>
            <h1 className="text-2xl font-semibold">Get in Touch</h1>
            <div className="mt-5 space-y-8">
              <ContactInfo
                title="Address"
                subtitle={
                  generalSettings?.address ||
                  'Block 115 T.F. Kuboye Road By The Podium Event Centre Marwa Bus Stop, Lekki Phase One, Lagos'
                }
                icon={<MapPin />}
              />
              <ContactInfo
                title="Phone"
                subtitle={generalSettings?.phone || '+234 803 123 4567'}
                icon={<Phone />}
              />
              <ContactInfo
                title="Email"
                subtitle={generalSettings?.email || 'info@example.com'}
                icon={<Mail />}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <h1 className="text-2xl font-semibold">Find Us</h1>
            <div className="mt-5 h-[400px] w-full">
              <iframe
                src={generalSettings?.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="800">
          <h1 className="text-2xl font-semibold">Send us a Message</h1>
          <div className="mt-5 w-full">
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  )
}
