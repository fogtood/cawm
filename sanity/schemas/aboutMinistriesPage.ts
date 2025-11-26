import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutMinistriesPage',
  title: 'About Ministries Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Ministries Page',
      readOnly: true,
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // About Section
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'aboutText',
          title: 'About Text',
          type: 'text',
          // type: 'array',
          // of: [{ type: 'block' }],
          // description: 'Full about description text section',
        }),
      ],
    }),

    // LEADERSHIP SECTION
    defineField({
      name: 'leadershipSection',
      title: 'Leadership Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Section description',
          type: 'text',
        }),
        defineField({
          name: 'leadership',
          title: 'Leadership Members',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'leader',
              title: 'Leader',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  description: 'e.g., General Overseer',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'About Ministries Page',
      }
    },
  },
})
