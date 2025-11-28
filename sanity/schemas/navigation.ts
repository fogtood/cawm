import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      initialValue: 'Main Navigation',
      readOnly: true,
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Slug/URL',
              type: 'string',
              description: 'e.g., "/about" or "/contact". Leave empty for dropdown only',
            }),
            defineField({
              name: 'subMenu',
              title: 'Sub Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'slug',
                      title: 'Slug/URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'order',
              title: 'Order',
              type: 'number',
              initialValue: 0,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              slug: 'slug',
              order: 'order',
            },
            prepare({ title, slug, order }) {
              return {
                title: `${order || 0}. ${title}`,
                subtitle: slug || 'Dropdown menu',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Navigation',
      }
    },
  },
})
