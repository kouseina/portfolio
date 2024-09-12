import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import ImageGrid from '##/cv/ImageGrid'
import Text from '#/UI/Text'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-cv" className="space-y-5">
      <div className="space-y-2.5">
        <div className="group w-fit">
          <Text type="heading" className="flex items-center">
            Daffa Putera Kouseina
            <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
          </Text>
        </div>

        <Text>I&#39;m a software engineer. I have 3 years of experience in mobile and web development. I have built many Android and iOS with flutter framework and web with ReactJS. By working on those projects, I accrued an imposing skill set, which has taught me punctuality. My motto is to provide high-quality work dedicated to work and client satisfaction delivered before the client deadline. </Text>
      </div>

      <ImageGrid />
    </section>
  )
}
