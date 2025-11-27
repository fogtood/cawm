'use client'

import { useForm } from '@formspree/react'
import CustomInput from '@/components/common/custom-input'
import { Button } from '@/components/ui/button'
import { FieldGroup, FieldSet } from '@/components/ui/field'
import { Send } from 'lucide-react'
import { useEffect, useRef } from 'react'

const CustomForm = () => {
  const [state, handleSubmit] = useForm('xanzwlop')
  const formRef = useRef<HTMLFormElement>(null)
  const wasSubmittingRef = useRef(false)

  useEffect(() => {
    // Detect when submission finishes
    if (wasSubmittingRef.current && !state.submitting) {
      if (state.succeeded) {
        formRef.current?.reset()
        alert('Submitted successfully!')
      } else if (Array.isArray(state.errors) && state.errors.length > 0) {
        alert('Something went wrong.')
      }
    }

    wasSubmittingRef.current = state.submitting
  }, [state.submitting, state.succeeded, state.errors])

  return (
    <form ref={formRef} id="contact-form" onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <CustomInput name="name" label="Full Name" type="text" placeholder="Your full name" />

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
            disabled={state.submitting}
            className="h-auto w-full max-w-3xs cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-2 text-base font-normal sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
          >
            <Send fill="white" />
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default CustomForm
