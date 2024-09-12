import Block from '#/UI/Block'

const aboutData = {
  heading: 'about me',
  text: "I'm a Computer Science student at Telkom School with a passion for technology and software. I'm excited to expand my skills and knowledge, with interests in machine learning, web3, and etc",
}
const {heading, text} = aboutData

export default function About() {
  return <Block token={'about-cv'} heading={heading} text={text} />
}
