import React from 'react'
import Box from "@material-ui/core/Box";

import Nav from '../nav/Nav'
import Profile from '../profile/Profile'
import AboutMe from '../aboutme/AboutMe'
import Services from '../services/Services'
import Resume from '../resume/Resume'
import '../../styles/Home.css'

const Home = () => {

    return (
        <Box className="root" >
            <Nav />
            <Box className="container">
                <Box className="back-color" />
                <Box className="back-color-two" />
                <Profile />
                <AboutMe />
                {/* <Services />
                <Resume /> */}
            </Box>

        </Box>
    )
}

export default Home
