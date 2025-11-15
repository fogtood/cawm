// Sanity content types
export interface Sermon {
  _id: string
  title: string
  slug: {
    current: string
  }
  preacher?: string
  dateTime?: string
  description?: string
  image?: any
  videoUrl?: string
  audioUrl?: string
  category?: string
}

export interface Event {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: any
  date?: string
  endDate?: string
  location?: string
  eventType?: string
  isUpcoming?: boolean
}

export interface Service {
  _id: string
  title: string
  location?: string
  image?: any
  schedule?: {
    day?: string
    time?: string
  }
  order?: number
}

export interface Mission {
  _id: string
  title: string
  description: string
  icon?: string
  order?: number
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  testimony: string
  image?: any
  order?: number
}

export interface HomePage {
  _id: string
  title: string
  hero?: {
    title?: string
    subtitle?: string
    backgroundImage?: any
    primaryButton?: {
      text?: string
      link?: string
    }
    secondaryButton?: {
      text?: string
      link?: string
    }
  }
  welcome?: {
    heading?: string
    title?: string
    description?: string
    image?: any
    buttonText?: string
    buttonLink?: string
  }
  sermonsSection?: {
    title?: string
    description?: string
    buttonText?: string
    buttonLink?: string
  }
  servicesSection?: {
    title?: string
    description?: string
  }
  liveProgram?: {
    title?: string
    description?: string
    youtubeVideoId?: string
  }
  eventsSection?: {
    title?: string
    description?: string
    buttonText?: string
    buttonLink?: string
  }
  testimonialsSection?: {
    title?: string
    description?: string
  }
}
