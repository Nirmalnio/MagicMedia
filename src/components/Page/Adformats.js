import React from 'react'
import Header from '../Header/Main'
import ServiceList2Col from '../MainServiceList2/ServiceList2Colo'
import ServiceList2 from '../MainServiceList2/ServiceList2'
import CustomerSays from '../MainServiceList1/Customer'
import Need from '../MainHome/Need'
import Pricing from '../MainHome/Pricing'
import Bredcom from '../Bredcom/Main'
import Animation from '../Animation/Second'

function Adformats() {
  return (
    <>
    <div className="inner_page_block white_option">
    {Animation &&
     <Animation />
   }
     
    <Header />
    <Bredcom same={"Ad Formats"} title={"Home"} subtitle={"Magic Media provides an effective and easy solution for publishers, advertisers, developers and marketers so that everyone can buy and sell premium, worldwide traffic in just a few clicks; from beginners to media buying experts."} />
  </div>
  <ServiceList2Col/>
  <ServiceList2/>
  <Need/>
 </>
  )
}

export default Adformats