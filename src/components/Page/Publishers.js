import React from 'react'
import ServiceDetail from '../MainServiceDetail/ServiceDetail'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
import Bredcom from '../Bredcom/Second'
import Animation from '../Animation/Second'
import ServiceList from '../MainServiceList1/ServiceList'

function Publishers() {
  return (
    <>
    <div className="inner_page_block white_option">
    {Animation &&
      <Animation />
    }
     <Header />
     <Bredcom same={"Software Development"} title={"Home"} subtitle={"Services"}/>
   </div>
   <ServiceList/>   
   <ServiceDetail/>
   <Need/>
  </>
  )
}

export default Publishers