import HeroSection from '@/sections/HeroSection'
import Pricing from '@/sections/Pricing'
import ProjectsMain from '@/sections/ProjectsSection'
import { Testimonials } from '@/sections/Testimonials'
import ApproachSection from '@/sections/ApproachSection'
import React from 'react'
import ProjectsMarque from '@/sections/ProjectsMarque'
import OurServices from '@/sections/OurServices'
import Faqs from '@/sections/Faqs'

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
      <Faqs /> 
    </>
  )
}

export default Page