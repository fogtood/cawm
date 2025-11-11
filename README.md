This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Sanity CMS Setup

This project uses Sanity CMS for content management. Follow these steps to set it up:

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create an account
2. Create a new project
3. Copy your Project ID and Dataset name

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run Sanity Studio

To access the Sanity Studio locally, run:

```bash
npm run sanity
```

Then open [http://localhost:3333](http://localhost:3333) to access the Studio.

Alternatively, you can access the Studio directly from your Next.js app at `/studio` when running `npm run dev`.

### 4. Content Types

The following content types are available in Sanity:

- **Sermons**: Manage sermons with titles, preachers, dates, videos, and audio
- **Events**: Manage upcoming events and activities
- **Services**: Manage church services and their schedules
- **Missions**: Manage mission statements and values
- **Testimonials**: Manage member testimonials

### 5. Using Sanity Data in Your App

Import the client and queries:

```typescript
import { clientFetch } from '@/lib/sanity.client'
import { sermonsQuery } from '@/lib/sanity.queries'

// In a Server Component
const sermons = await clientFetch(sermonsQuery)
```

For images, use the image URL builder:

```typescript
import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'

const imageUrl = urlFor(sermon.image).width(800).height(600).url()
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
