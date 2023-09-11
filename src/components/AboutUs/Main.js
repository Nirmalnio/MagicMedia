import React from 'react'
import Header from '../Header/Main'
import Review from '../MainAboutUs/Review'
import Aboutus from '../MainAboutUs/Aboutus'
import Solution from '../MainAboutUs/Solution'
import OurTeam from '../MainAboutUs/OurTeam'
import Customer from '../MainAboutUs/Customer'
import FreeTrial from '../MainHome/FreeTrial'
import Need from '../MainAboutUs/Need'
import Bredcom from '../Bredcom/Main'
import Animation from '../Animation/Second'
import Trusted from '../MainHome/Trusted'



function Main() {
  return (
    <>
      <div className="inner_page_block white_option">
        {Animation &&
          <Animation />
        }
        <Header />
        <Bredcom same={"About us"} title={"Home"} subtitle={""} />
      </div>
      {/* <Review /> */}
      <Aboutus />
      <Solution />
      <OurTeam />
      <Trusted />
      {/* <Customer /> */}
      {/* <FreeTrial /> */}
      <Need />
    </>
  )
}

export default Main
