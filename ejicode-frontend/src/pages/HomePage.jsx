import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Stats from '../components/Stats'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import BigCta from '../components/BigCta'
import CompaniesWorkedWith from '../components/CompaniesWorkedWith'

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <Marquee />
      <Services />
      <BigCta />
      <CompaniesWorkedWith />
    </>
  )
}

export default HomePage
