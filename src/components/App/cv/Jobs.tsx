import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import FreelanceImage from '%/cv/freelance.jpg'
import RhakasaImage from '%/cv/rakhasa.jpeg'
import DealjavaImage from '%/cv/dealjava.jpeg'
import SavirImage from '%/cv/savir.jpeg'

const jobsData: any = {
  heading: 'work',
  text: 'Below is a list of companies where I have worked as a <span class="text-white">Software Engineer</span>',
  items: {
    'savir': {
      title: 'Satu Visi Raya',
      caption: 'Mobile Developer',
      duration: 'Mar 2024 - Aug 2024',
      link: 'https://www.linkedin.com/company/pt-satu-visi-raya',
      icon: SavirImage,
    },
    'dealjava': {
      title: 'Dealjava',
      caption: 'Mobile Developer',
      duration: 'July 2023 - July 2024',
      link: 'https://www.linkedin.com/company/dealjava',
      icon: DealjavaImage,
    },
    'rhakasa': {
      title: 'Rakhasa Arta Wisesa',
      caption: 'Mobile Developer',
      duration: 'Oct 2021 - May 2023',
      link: 'https://www.linkedin.com/company/rakhasa',
      icon: RhakasaImage,
    },
    'custom-freelance': {
      title: 'Freelance',
      caption: 'Software Engineer',
      duration: 'Oct 2020 - Present',
      link: '/works',
      icon: FreelanceImage,
    },
  },
}
const { heading, text, items } = jobsData

export default function Jobs() {
  return (
    <Block token={'jobs-cv'} heading={heading} text={text} className="space-y-4">
      <div className="space-y-6">
        {Object.keys(items).map((key) => {
          const job = items[key]
          return <ItemLink key={key} {...job} />
        })}
      </div>
    </Block>
  )
}
