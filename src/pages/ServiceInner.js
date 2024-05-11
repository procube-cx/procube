import React from 'react'
import Navbar from '../component/hero/Navbar2'
import NextUp from '../component/NextUp'
import Footer from '../component/hero/Footer'
import Partner6 from '../component/Partner/Partner6'
import Partner3 from '../component/Partner/Partner3'
import Partner2 from '../component/Partner/Partner2'
import Landing3 from '../component/hero/Landing3'
import ServiceHero from '../component/services/ServiceHero'
import ServiceInner2 from '../component/services/ServiceInner2'

const ServiceInner = () => {
  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <ServiceHero />
      <Landing3 />
      <Partner2 />
      <Partner3 />
      <Partner6 />
      <ServiceInner2 />
      <NextUp Heading={'Projects'} />
      <Footer />
    </div>
  )
}

export default ServiceInner