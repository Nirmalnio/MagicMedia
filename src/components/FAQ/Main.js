import React from 'react'
import FaqBlock from '../MainPagesPricing/FaqBlock'
import Need from '../MainHome/Need'
import Header from '../Header/Main'
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
        <Bredcom same={"Faqs"} title={"Home"} subtitle={"Faq"} />

      </div>
      <FaqBlock />
      <Need />
    </>
  )
}

export default Main
