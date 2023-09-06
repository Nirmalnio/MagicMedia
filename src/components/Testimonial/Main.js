import React from 'react'
import Header from '../Header/Main'
import Review from '../MainTestimonial/Review'
import ServiceReview from '../MainTestimonial/ServiceReview'
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
        <Bredcom same={"What Our Client Says"} title={"Home"} subtitle={"Testimonials"}/>
      
      </div>
      <Review/>
      <ServiceReview/>
      <Need/>
    </>
  )
}

export default Main
