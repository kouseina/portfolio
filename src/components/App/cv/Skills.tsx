import Block from '#/UI/Block'
import Badge from '#/UI/Badge'

import FlutterLogo from '%/cv/tech/flutter.svg'
import KotlinLogo from '%/cv/tech/kotlin.svg'
import AndroidLogo from '%/cv/tech/android.svg'
import IosLogo from '%/cv/tech/ios.svg'
import FirebaseLogo from '%/cv/tech/firebase.svg'
import TsLogo from '%/cv/tech/typescript.svg'
import ReactLogo from '%/cv/tech/react.svg'
import NextLogo from '%/cv/tech/nextjs.svg'
import NodeLogo from '%/cv/tech/node.svg'
import TailwindLogo from '%/cv/tech/tailwind.svg'

const skillsData: any = {
  heading: 'skills',
  text: 'With over 3 years of <span class="text-white">mobile</span> and <span class="text-white">web development</span> experience, I specialize in crafting intuitive user interfaces and delivering high-quality app.',
  techs: {
    flutter: {
      name: 'Flutter',
      icon: FlutterLogo,
    },
    kotlin: {
      name: 'Kotlin',
      icon: KotlinLogo,
    },
    android: {
      name: 'Android & Playstore',
      icon: AndroidLogo,
    },
    ios: {
      name: 'IOS & Appstore',
      icon: IosLogo,
    },
    firebase: {
      name: 'Firebase',
      icon: FirebaseLogo,
    },
    ts: {
      name: 'Typescript',
      icon: TsLogo,
    },
    react: {
      name: 'React',
      icon: ReactLogo,
    },
    nextjs: {
      name: 'NextJS',
      icon: NextLogo,
    },
    nodejs: {
      name: 'NodeJS',
      icon: NodeLogo,
    },
    tailwind: {
      name: 'Tailwind CSS',
      icon: TailwindLogo,
    },
  },
}
const { heading, text, techs } = skillsData

export default function Skills() {
  return (
    <Block token={'skills-cv'} heading={heading} text={text} className="space-y-4">
      <div className="flex flex-wrap gap-2 sm:grid-cols-3 md:grid-cols-4">
        {Object.keys(techs).map((key) => {
          const item = techs[key]
          return <Badge className="text-neutral-200" size="medium" text={item.name} icon={item.icon} key={item} />
        })}
      </div>
    </Block>
  )
}
