
import { revalidateTime } from '@/lib/utils'
import { Product } from '@/types/product'

import Block from '#/UI/Block'
import ProductCard from '#/UI/ProductCard'
import Button from '#/UI/Button'

export async function getWorks(): Promise<Product[]> {
  return []
}

const worksData = {
  heading: 'my works',
  text: 'Creating an app is my passion. I oversee the entire process from idea and design to coding and delivering the final product.',
}
const { heading, text } = worksData

export default async function Works() {
  const works: Product[] = await getWorks()

  if (!works) {
    return <mark>There is no data at here</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <Block token={'works-index'} heading={heading} text={text}>
      <div className="flex flex-col gap-5 sm:gap-4">
        {works
          .filter((work) => work.is_best)
          .map((work, index) => (
            <ProductCard type="work" product={work} key={index} />
          ))}

        <Button link="/works" text="View All" />
      </div>
    </Block>
  )
}
