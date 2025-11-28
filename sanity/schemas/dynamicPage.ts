import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dynamicPage',
  title: 'Dynamic Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'template',
      title: 'Page Template',
      type: 'string',
      options: {
        list: [
          { title: 'About Template', value: 'about' },
          { title: 'Youth Template', value: 'youth' },
          { title: 'Basic Template', value: 'basic' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
    // About Section (for all templates)
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
        }),
      ],
    }),
    // Mission & Vision (for about template)
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      hidden: ({ parent }) => parent?.template !== 'about',
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      hidden: ({ parent }) => parent?.template !== 'about',
    }),
    // Leadership Section (for about, ministry, youth templates)
    defineField({
      name: 'leadershipSection',
      title: 'Leadership Section',
      type: 'object',
      hidden: ({ parent }) => parent?.template === 'basic',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
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
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        }),
      ],
    }),
    // Photos/Gallery (for ministry and youth templates)
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
      hidden: ({ parent }) => !['ministry', 'youth'].includes(parent?.template),
    }),
    // Additional Content Blocks (for basic template)
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      hidden: ({ parent }) => parent?.template !== 'basic',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      template: 'template',
    },
    prepare({ title, slug, template }) {
      return {
        title,
        subtitle: `/${slug} (${template} template)`,
      }
    },
  },
})
