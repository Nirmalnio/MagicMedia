import React from 'react'
import ServiceDetail from '../MainServiceDetail/ServiceDetail'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
import Bredcom from '../Bredcom/Second'
import Animation from '../Animation/Second'
import ServiceList from '../MainServiceList1/ServiceList'
import ServiceListBrand from '../MainServiceList1/ServiceListBrand'
import ServiceDetailsBrand from '../MainServiceDetail/ServiceDetailsBrand'

function Brandsafety() {
  return (
    <>
    <div className="inner_page_block white_option">
    {Animation &&
      <Animation />
    }
     <Header />
     <Bredcom same={"Brand safety and Transparency"} title={"Home"} subtitle={"Brand safety and Transparency"}/>
   </div>
   <ServiceListBrand/>
   <ServiceDetailsBrand/>
   <Need/>
  </>
  )
}

export default Brandsafety
