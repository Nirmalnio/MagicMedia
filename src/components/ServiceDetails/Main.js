import React from 'react'
import ServiceDetail from '../MainServiceDetail/ServiceDetail'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
import Bredcom from '../Bredcom/Second'
import Animation from '../Animation/Second'




function Main() {
  return (
    <>
      <div className="inner_page_block white_option">
      {Animation &&
        <Animation />
      }
       <Header />
       <Bredcom same={"Software Development"} title={"Home"} subtitle={"Services"}/>
     </div>
     <ServiceDetail/>
     <Need/>
    </>
  )
}

export default Main
