import React from 'react'
import Header from '../Header/Main'
import Bloglist from '../MainBlogList/Bloglist'
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
                <Bredcom same={"Blog list classic"} title={"Home"} subtitle={"Blog list"} />

            </div>
            <Bloglist />
            <Need />
        </>
    )
}

export default Main
