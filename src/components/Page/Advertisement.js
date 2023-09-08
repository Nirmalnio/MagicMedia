import React from 'react'
import Animation from "../Animation/Second"
import ServiceDetail from '../MainServiceDetail/ServiceDetail'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
import Bredcom from '../Bredcom/Second'
import Second from '../Animation/Second'
import ServiceList from '../MainServiceList1/ServiceList'
function Advertisement() {
  return (
    <>
    <div className="inner_page_block white_option">
    {Second &&
      <Second/>
    }
     <Header />
     <Bredcom same={"KPI-focused programmatic media - buying platform"} title={"Home"} subtitle={"Using a complex of cutting-edge programmatic technologies to let advertisers, agencies, and networks unleash the true potential of digital advertising which is ever-transparent, safe, and KPI-driven."}/>
   </div>
   <ServiceList/>
   <ServiceDetail/>
   <Need/>
  </>
  )
}

export default Advertisement