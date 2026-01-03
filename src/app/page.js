import dynamic from 'next/dynamic'
import HeroSection from '@/sections/HeroSection'
import { faqs } from '@/data/FAQs.js'

// Dynamic Imports for code splitting
const ProjectsMain = dynamic(() => import('@/sections/ProjectsSection'))
const Pricing = dynamic(() => import('@/sections/Pricing'))
const Testimonials = dynamic(() => import('@/sections/Testimonials').then(mod => mod.Testimonials))
const ApproachSection = dynamic(() => import('@/sections/ApproachSection'))
const ProjectsMarque = dynamic(() => import('@/sections/ProjectsMarque'))
const OurServices = dynamic(() => import('@/sections/OurServices'))
const Faqs = dynamic(() => import('@/sections/Faqs'))

const Page = () => {
  return (
    <>
      <HeroSection />
      <ProjectsMarque />
      <ApproachSection />
      <OurServices />
      <ProjectsMain />
      <Testimonials />
      <Pricing />
      <Faqs items={faqs} />
    </>
  )
}

export default Page