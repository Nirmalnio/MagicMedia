import React from 'react'
import Header from '../Header/Main'
import ServiceList2Col from '../MainServiceList2/ServiceList2Colo'
import ServiceList2 from '../MainServiceList2/ServiceList2'
import CustomerSays from '../MainServiceList1/Customer'
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
       <Bredcom same={"Services List 2"} title={"Home"} subtitle={"Our Services"} />
     </div>
     <ServiceList2Col/>
     <ServiceList2/>
     <CustomerSays/>
     <Pricing/>
     <Need/>
    </>
  )
}

export default Main
