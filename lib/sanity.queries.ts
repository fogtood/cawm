import { groq } from 'next-sanity'

// Sermon queries
export const sermonsQuery = groq`*[_type == "sermon"] | order(date desc) {
  _id,
  title,
  slug,
  preacher,
  date,
  description,
  image,
  videoUrl,
  audioUrl,
  category
}`

export const sermonBySlugQuery = groq`*[_type == "sermon" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  preacher,
  date,
  description,
  image,
  videoUrl,
  audioUrl,
  category
}`

// Event queries
export const eventsQuery = groq`*[_type == "event"] | order(date asc) {
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
  description,
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

// Testimonial queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  testimony,
  image,
  order
}`

