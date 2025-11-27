'use client'

interface YoutubeEmbedProps {
  videoId?: string
}

const YoutubeEmbed = ({ videoId = 's7jXASBWwwI' }: YoutubeEmbedProps) => {
  if (!videoId) {
    return null
  }

  return (
    <div className="relative my-10 w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeEmbed
