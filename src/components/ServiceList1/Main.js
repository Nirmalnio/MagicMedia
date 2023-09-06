import React from 'react'
import Header from '../Header/Main'
import ServiceList from '../MainServiceList1/ServiceList'
import WhyChoose from '../MainServiceList1/WhyChoose'
import Customer from '../MainServiceList1/Customer'
import Need from '../MainHome/Need'
import Pricing from '../MainHome/Pricing'
import Bredcom from '../Bredcom/Main'
import Animation from '../Animation/Second'



function Main() {
  return (
    <>
     <div className="inner_page_block white_option">
     {Animation &&
        <Animation />
      }
       <Header />
       <Bredcom same={"Services List 1"} title={"Home"} subtitle={"Our Services"} />
     </div>
     <ServiceList/>
     <WhyChoose/>
     <Customer/>
     <Pricing/>
     <Need/> 
    </>
  )
}

export default Main
