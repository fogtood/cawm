import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'values',
  title: 'Mission, Vision & Belief',
  type: 'document',
  fields: [
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'valueItem',
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'valueItem',
    }),
    defineField({
      name: 'belief',
      title: 'Belief',
      type: 'valueItem',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Mission, Vision & Belief',
      }
    },
  },
})
