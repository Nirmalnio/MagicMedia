import React from 'react'
import ServiceDetail from '../MainServiceDetail/ServiceDetail'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
import Bredcom from '../Bredcom/Second'
import Animation from '../Animation/Second'
import ServiceList from '../MainServiceList1/ServiceList'
import ServiceDetailsPublic from '../MainServiceDetail/ServiceDetailsPublic'
import ServiceListPublic from '../MainServiceList1/ServiceListPublic'

function Publishers() {
  return (
    <>
    <div className="inner_page_block white_option">
    {Animation &&
      <Animation />
    }
     <Header />
     <Bredcom same={"Publisher Solutions for technologically progressive Programmatic Monetization"} title={"Home"} subtitle={"World's best AI and MA-powered technologies implemented on the single programmatic platform that lets publishers, media owners, and app developers enhance the value of their inventory across the screens, formats, and verticals."}/>
   </div>
   <ServiceListPublic/>   
   <ServiceDetailsPublic/>
   <Need/>
  </>
  )
}

export default Publishers