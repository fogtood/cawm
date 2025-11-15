# Sanity Live Preview Setup

## Overview

This project is configured to support Sanity Live Preview (real-time content updates) and Visual Editing.

## Configuration

### 1. Environment Variables

Add these to your `.env.local`:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Sanity Live Preview (optional - enable for visual editing)
NEXT_PUBLIC_SANITY_STEGA_ENABLED=false
NEXT_PUBLIC_SANITY_STUDIO_URL=/studio

# Sanity API Token (for preview/draft content)
SANITY_API_READ_TOKEN=your-read-token
```

### 2. Getting Your Read Token

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to API > Tokens
4. Create a new token with "Read" permissions
5. Add it to `.env.local` as `SANITY_API_READ_TOKEN`

### 3. Enabling Visual Editing

To enable visual editing (click-to-edit in the browser):

1. Set `NEXT_PUBLIC_SANITY_STEGA_ENABLED=true` in `.env.local`
2. Restart your dev server
3. Open your site and click on content to edit it directly

### 4. Live Preview Setup

The client is configured with:
- **Production client**: Uses CDN, published perspective
- **Preview client**: No CDN, drafts perspective (for preview mode)

## Usage

### Server Components (Current Implementation)

The home page uses server components with the production client. For live updates:

1. Changes in Sanity Studio are automatically reflected
2. Next.js will revalidate the page on the next request
3. For immediate updates, use On-Demand Revalidation (see below)

### On-Demand Revalidation

To get instant updates when content changes:

1. Create an API route at `app/api/revalidate/route.ts`
2. Set up a webhook in Sanity to call this route
3. The route will revalidate the page when content changes

Example webhook setup:
- URL: `https://yourdomain.com/api/revalidate`
- Trigger: On create, update, or delete
- Secret: Your revalidation secret

## Type Generation

Types are manually maintained in `lib/sanity.types.ts`. To auto-generate types in the future:

1. Install `@sanity-typed/types` (when available)
2. Run `npm run typegen`
3. Types will be generated from your schema

## Image Configuration

Images are configured to load from `cdn.sanity.io` in `next.config.ts`. This is already set up and working.

