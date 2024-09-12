import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import TelkomImage from '%/cv/telkom.png'

const education: any = {
  'telkom-school': {
    title: 'Telkom School Purwokerto',
    caption: 'Software Engineering',
    duration: 'July 2018 - March 2021',
    link: 'https://smktelkom-pwt.sch.id/',
    icon: TelkomImage,
  }
}

export default function Education() {
  return (
    <Block token={'education-cv'} heading="education" className="space-y-4">
      {Object.keys(education).map((key) => {
        const job = education[key]
        return <ItemLink key={key} {...job} />
      })}
    </Block>
  )
}
