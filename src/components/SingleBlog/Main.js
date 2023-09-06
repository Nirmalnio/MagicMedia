import React from 'react'
import Header from '../Header/Main'
import BlogDetails from '../MainSingleBlog/BlogDetails'
import Comments from '../MainSingleBlog/Comments'
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
       <Bredcom same={"Blog single"} title={"Home"} subtitle={"Blog single"} />

            </div>
            <BlogDetails/>
            <Comments/>
            <Need/>
            

        </>
    )
}

export default Main
