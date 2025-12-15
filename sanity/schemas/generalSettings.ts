import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the primary site logo (SVG/PNG recommended)',
    }),
    // Contact Details
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The postal address, as it should appear on site',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'The primary public phone number',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Public-facing email address',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Map Embed URL',
      type: 'url',
      description: 'Paste the Google Map embed link for your location',
    }),
    // Social Links
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      description: 'Full URL to Facebook page',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      description: 'Full URL to Instagram profile',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url',
      description: 'Full URL to Twitter (X) profile',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      description: 'Full URL to YouTube channel',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok URL',
      type: 'url',
      description: 'Full URL to TikTok profile',
    }),
    defineField({
      name: 'spotify',
      title: 'Spotify URL',
      type: 'url',
      description: 'Full URL to Spotify profile',
    }),
    // Meta/SEO Global
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Default site title for SEO and browser tab',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 2,
      description: 'Default description of the site for SEO and social sharing',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: { hotspot: false },
      description: '16x16 or 32x32 favicon image (optional, else defaults to logo)',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      address: 'address',
    },
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
})
