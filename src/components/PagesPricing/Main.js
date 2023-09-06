import React from 'react'
import Header from '../Header/Main'
import Pricing from '../MainHome/Pricing'
import FaqBlock from '../MainPagesPricing/FaqBlock'
import Need from '../MainHome/Need'
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
       <Bredcom same={"Best Pricing"} title={"Home"} subtitle={"Our Pricing"} />

     </div>
     <Pricing/>
     <FaqBlock/>
     <Need/>
    </>
  )
}

export default Main
