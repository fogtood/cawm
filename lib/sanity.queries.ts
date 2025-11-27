import { groq } from 'next-sanity'

// Sermon queries
export const sermonsQuery = groq`*[_type == "sermon" 
    && (!defined($search) || title match $search || preacher match $search || description match $search)
    && (!defined($speaker) || preacher == $speaker)
    && (!defined($category) || category == $category)
    && (!defined($alphabet) || title match $alphabet)
  ] | order(dateTime desc) [$start...$end]{
  _id,
  title,
  slug,
  preacher,
  dateTime,
  description,
  image,
  youtubeVideoId,
  audioUrl,
  category
}`

export const sermonBySlugQuery = groq`*[_type == "sermon" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  preacher,
  dateTime,
  description,
  image,
  youtubeVideoId,
  audioUrl,
  category
}`

export const totalSermons = groq`count(*[_type == "sermon"])`

// Event queries
export const eventsQuery = groq`*[_type == "event" && (!defined($search) || title match $search || description match $search)] | order(date asc) [$start...$end] {
  _id,
  title,
  slug,
  description,
  image,
  date,
  endDate,
  location,
  eventType,
  isUpcoming
}`

// Total Event
export const totalEvents = groq`count(*[_type == "event"])`

export const upcomingEventsQuery = groq`*[_type == "event" && isUpcoming == true] | order(date asc) {
  _id,
  title,
  slug,
  description,
  image,
  date,
  endDate,
  location,
  eventType
}`

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  image,
  date,
  endDate,
  location,
  eventType,
  isUpcoming
}`

// Service queries
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  location,
  image,
  schedule,
  order
}`

// Mission queries
export const missionsQuery = groq`*[_type == "mission"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  order
}`

// Value queries
export const valuesQuery = groq`*[_type == "values"][0] {
  _id,
  mission,
  vision,
  belief
}`

export const mediaFolderQuery = groq`*[_type == "media" && (!defined($search) || title match $search || date match $search)] | order(date desc) [$start...$end] {
  _id,
  title,
  date,
  driveUrl
}`

export const totalFolders = groq`count(*[_type == "media"])`

// Testimonial queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  testimony,
  image,
  order
}`

export const generalSettingsQuery = groq`*[_type == "generalSettings"][0] {
  _id,
  siteTitle,
  siteDescription,
  email,
  phone,
  address,
  facebook, 
  instagram,
  twitter,
  youtube,
  mapEmbedUrl,
  logo,
  favicon
}`

export const HOME_QUERY = groq`*[_type == "homePage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    primaryButton { text, link },
    secondaryButton { text, link }
  },
  welcome { heading, title, description, image, buttonText, buttonLink },
  sermonsSection { _id, identifier, title, description, buttonText, buttonLink },
  servicesSection { _id, identifier, title, description, buttonText, buttonLink },
  liveProgram { title, description, youtubeVideoId },
  eventsSection { _id, identifier, title, description, buttonText, buttonLink },
  testimonialsSection { _id, identifier, title, description, buttonText, buttonLink },

  // Small lists included in the same request to avoid additional round trips
  "sermons": *[_type == "sermon"] | order(dateTime desc) [0...4] {
    _id, title, slug, preacher, dateTime, description, shortPreview, image, videoUrl, audioUrl, category
  },

  "services": *[_type == "service"] | order(order asc) [0...3] {
    _id, title, description, location, image, schedule, order
  },

  "events": *[_type == "event" && isUpcoming == true] | order(date asc) [0...4] {
    _id, title, slug, description, shortPreview, image, date, endDate, location, eventType
  },

  "testimonials": *[_type == "testimonial"] | order(order asc) [0...6] {
    _id, name, role, testimony, image, order
  },

  "values": *[_type == "values"][0] { _id, mission, vision, belief }
}`

// About Page
export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
    aboutSection {
      title, 
      aboutText,
    },
    mission,
    vision,
    leadershipSection {
      title, 
      description,
      leadership
    }
}`

export const aboutYouthsPageQuery = groq`*[_type == "aboutYouthsPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
    aboutSection {
      title, 
      aboutText,
    },
    leadershipSection {
      title, 
      description,
      leadership
    }, 
    photos[]{
      asset->{
        url
      }
    }
}`

export const aboutMinistriesPageQuery = groq`*[_type == "aboutMinistriesPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
    aboutSection {
      title, 
      aboutText,
    },
    leadershipSection {
      title, 
      description,
      leadership
    }, 
    photos[]{
      asset->{
        url
      }
    }
}`

export const mediaPageQuery = groq`*[_type == "mediaPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
}`

export const eventsPageQuery = groq`*[_type == "eventsPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
}`

export const sermonsPageQuery = groq`*[_type == "sermonsPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
}`

export const contactPageQuery = groq`*[_type == "contactPage"][0] {
  _id,
  title,
  hero {
    title,
    subtitle,
    backgroundImage,
    },
}`
