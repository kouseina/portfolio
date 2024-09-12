import Image from 'next/image'
import '../../../assets/stylesheets/animate-skeleton.css'

import CampImage from '%/cv/grid/camp.jpg'
import DicodingImage from '%/cv/grid/dicoding.jpg'
import HackatonImage from '%/cv/grid/hackaton.webp'
import TrailImage from '%/cv/grid/trail.jpg'

type GridData = {
  main: Record<
    string,
    {
      src: any
      video?: boolean
      classes: string
      alt: string
    }
  >
}

const gridImageHeight = 'h-44 xl:h-32 sm:h-40 xs:h-32'

const gridData: GridData = {
  main: {
    'camp': {
      src: CampImage,
      alt: 'Me at Kalitawang for camping',
      classes: 'row-span-12 col-span-2 sm:col-span-1',
    },
    'dicoding': {
      src: DicodingImage,
      alt: 'Me at Dicoding Conference',
      classes: 'row-span-12 col-span-1 sm:col-span-1',
    },
    'hackaton': {
      src: HackatonImage,
      alt: 'Me at Codefest for hackaton',
      classes: 'row-span-12 col-span-1 sm:col-span-1',
    },
    'trail': {
      src: TrailImage,
      alt: 'Me at Merapi for trail',
      classes: 'row-span-12 col-span-2 sm:col-span-1',
    },
  },
}

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 xl:gap-3 sm:gap-2.5 sm:grid-cols-2">
        {Object.entries(gridData.main).map(([key, {src, alt, classes, video}]) => (
          <div key={key} className={`relative rounded-lg overflow-hidden animate-skeleton ${classes}`}>
            {video ? (
              <video className="object-cover s-full" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image quality={100} alt={alt} src={src} fill sizes="35vw" priority className="object-cover sm:object-center" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
