import React from 'react'
import Header from '../Header/Main'
import Banner from '../Banner/Banner'
import Solution from '../MainHome/Solution'
import Analyze from '../MainHome/Analyze'
import Collaborate from '../MainHome/Collaborate'
import Communication from '../MainHome/Communication'
import AdvanceFeature from '../MainHome/AdvanceFeature'
import PowerfulSolution from '../MainHome/PowerfulSolution'
import Integration from '../MainHome/Integration'
import Customer from '../MainHome/CustomerSays'
import Trusted from '../MainHome/Trusted'
import Pricing from '../MainHome/Pricing'
import Faqbloick from '../MainHome/Faqblock'
import Interface from '../MainHome/Interface'
import FreeTrial from '../MainHome/FreeTrial'
import LatestStory from '../MainHome/LatestStory'
import Need from '../MainHome/Need'
import Animation from '../Animation/Main'


function Main() {
  return (
    <>
      <div className="top_home_wraper white_option">
        {Animation &&
          <Animation />
        }
        <Header />
        <Banner />
      </div>
       <Solution />
      <Analyze />
      <Collaborate />
      <Communication />
      <AdvanceFeature />
      <PowerfulSolution />
      <Integration />
      <Customer />
      <Trusted />
       <Pricing />
      <Faqbloick />
      <Interface />
      <FreeTrial />
      <LatestStory />
      <Need />  
    </>
  )
}

export default Main
