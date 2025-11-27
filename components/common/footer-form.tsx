'use client'

import { useForm } from '@formspree/react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useEffect, useRef } from 'react'

const FooterForm = () => {
  const [state, handleSubmit] = useForm('xwpdobzv')
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
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        className="mb-4 h-auto w-full max-w-sm rounded-sm border-[#DADADA4D] bg-[#57575633] px-2.5 py-3.5"
      />
      <Button
        type="submit"
        disabled={state.submitting}
        className="h-auto w-full max-w-sm cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
      >
        {state.submitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  )
}

export default FooterForm
