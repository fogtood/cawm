import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Folder Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    // defineField({
    //   name: "thumbnail",
    //   title: "Folder Thumbnail",
    //   type: "image",
    //   description: "The icon or preview image shown on the website",
    // }),
    defineField({
      name: 'driveUrl',
      title: 'Google Drive Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Paste the shareable link to the Google Drive folder containing the media.',
    }),
  ],
})
