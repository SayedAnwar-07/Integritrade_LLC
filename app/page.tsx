import Hero from '@/components/site/Hero'
import WhyChoose from '@/components/site/WhyChoose'
import Certs from '@/components/site/Certs'
import ServicesGrid from '@/components/site/ServicesGrid'
import Impact from '@/components/site/Impact'
// import Testimonials from '@/components/site/Testimonials'
// import CaseStudies from '@/components/site/CaseStudies'
import About from '@/components/site/About'

export default function Page(){
  return (
    <>
      <Hero />
      <WhyChoose />
      <Certs />
      <ServicesGrid/>
      <Impact />
      {/* <Testimonials /> */}
      {/* <CaseStudies /> */}
      <About />
    </>
  )
}
