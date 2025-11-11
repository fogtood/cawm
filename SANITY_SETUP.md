# Sanity CMS Setup Guide

## Quick Start

1. **Create a Sanity account and project**
   - Go to [https://www.sanity.io](https://www.sanity.io)
   - Sign up or log in
   - Create a new project
   - Note your Project ID and Dataset name (usually "production")

2. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add the following:
     ```env
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
     NEXT_PUBLIC_SANITY_DATASET=production
     ```
   - Replace `your-project-id-here` with your actual Sanity Project ID

3. **Initialize Sanity (if needed)**
   - Run: `npx sanity init`
   - Follow the prompts to connect to your project
   - This will create the necessary configuration files

4. **Access Sanity Studio**
   - Option 1: Via Next.js app - Run `npm run dev` and visit `/studio`
   - Option 2: Standalone - Run `npm run sanity` and visit `http://localhost:3333`

## Content Types

### Sermon

- Title, Slug, Preacher
- Date, Description
- Image, Video URL, Audio URL
- Category (Sunday Service, Bible Study, Prayer Meeting, Special Service)

### Event

- Title, Slug, Description
- Event Date, End Date
- Location, Event Type
- Image
- Is Upcoming flag

### Service

- Title, Description
- Image
- Schedule (Day, Time)
- Display Order

### Mission

- Title, Description
- Icon Name
- Display Order

### Testimonial

- Name, Role/Title
- Testimony
- Image
- Display Order

## Using Sanity Data in Your Components

### Server Components (Recommended)

```typescript
import { clientFetch } from '@/lib/sanity.client'
import { sermonsQuery } from '@/lib/sanity.queries'

export default async function SermonsPage() {
  const sermons = await clientFetch(sermonsQuery)

  return (
    <div>
      {sermons.map((sermon) => (
        <div key={sermon._id}>
          <h2>{sermon.title}</h2>
          <p>{sermon.preacher}</p>
        </div>
      ))}
    </div>
  )
}
```

### Using Images

```typescript
import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'

export default function SermonCard({ sermon }) {
  const imageUrl = sermon.image
    ? urlFor(sermon.image).width(800).height(600).url()
    : null

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={sermon.title}
          width={800}
          height={600}
        />
      )}
      <h2>{sermon.title}</h2>
    </div>
  )
}
```

## Available Queries

All queries are available in `lib/sanity.queries.ts`:

- `sermonsQuery` - All sermons
- `sermonBySlugQuery` - Single sermon by slug
- `eventsQuery` - All events
- `upcomingEventsQuery` - Upcoming events only
- `eventBySlugQuery` - Single event by slug
- `servicesQuery` - All services
- `missionsQuery` - All missions
- `testimonialsQuery` - All testimonials

## Next Steps

1. Add your Sanity Project ID to `.env.local`
2. Run `npm run dev` and visit `/studio` to start adding content
3. Update your components to fetch data from Sanity
4. Deploy your Sanity Studio with `npm run sanity:deploy`

## Troubleshooting

- **Studio not loading**: Make sure your Project ID is correct in `.env.local`
- **Data not showing**: Verify your dataset name matches in `.env.local`
- **Build errors**: Ensure all environment variables are set before building
