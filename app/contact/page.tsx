import Bg from '@/components/common/bg'
import ContactInfo from '@/components/common/contact-info'
import CustomInput from '@/components/common/custom-input'
import { Button } from '@/components/ui/button'
import { FieldGroup, FieldSet } from '@/components/ui/field'
import { urlFor } from '@/lib/sanity.image'
import { contactPageQuery, generalSettingsQuery } from '@/lib/sanity.queries'
import { ContactPage, GeneralSettings } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default async function Contact() {
  const { data: contactPage } = (await sanityFetch({ query: contactPageQuery })) as {
    data: ContactPage
  }

  const { data: generalSettings } = (await sanityFetch({ query: generalSettingsQuery })) as {
    data: GeneralSettings
  }

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
                src={generalSettings.mapEmbedUrl}
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
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <CustomInput
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="Your full name"
                  />

                  <CustomInput
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 items-end gap-5 lg:grid-cols-2">
                  <CustomInput
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="+234 803 123 4567"
                  />

                  <CustomInput
                    name="reason"
                    label="I’m contacting you about"
                    type="select"
                    placeholder="Select enquiry type"
                  />
                </div>

                <CustomInput
                  name="subject"
                  label="Subject"
                  type="text"
                  placeholder="what's this about?"
                />

                <CustomInput
                  name="message"
                  label="Message"
                  type="textarea"
                  placeholder="Tell us how we can help you..."
                />

                <Button
                  size="icon"
                  className="h-auto w-full max-w-3xs cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-2 text-base font-normal sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
                >
                  <Send fill="white" />
                  Send Message
                </Button>
              </FieldGroup>
            </FieldSet>
          </div>
        </div>
      </div>
    </div>
  )
}
