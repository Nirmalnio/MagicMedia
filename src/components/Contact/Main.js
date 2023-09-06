import React from 'react'
import Header from '../Header/Main'
import ContactList from '../MainContact/ContactList'
import ContactForm from '../MainContact/ContactForm'
import Map from '../MainContact/Map'
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
                <Bredcom same={"Contact Us"} title={"Home"} subtitle={"Contact Us"} />
            </div>

            <ContactList />
            <ContactForm />
            <Map />
            <Need />

        </>
    )
}

export default Main
