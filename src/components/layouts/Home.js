import React from 'react'
import Box from "@material-ui/core/Box";

import Nav from '../nav/Nav'
import Profile from '../profile/Profile'
import AboutMe from '../aboutme/AboutMe'
import Services from '../services/Services'
import Resume from '../resume/Resume'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import '../../styles/Home.css'

const Home = () => {
    const [navSelectionPostion, setNavSelectionPostion] = React.useState(0);

    return (
        <Box className="root" >
            <Nav selected={setNavSelectionPostion} />
            <Box className="container">
                <Box className="back-color" />
                <Box className="back-color-two" />
                <Profile />

                {navSelectionPostion === 0 ? <AboutMe /> : null}
                {navSelectionPostion === 1 ? <Services /> : null}
                {navSelectionPostion === 2 ? <Resume /> : null}
                {navSelectionPostion === 3 ? <Portfolio /> : null}
                {navSelectionPostion === 4 ? <Contact /> : null}
            </Box>

        </Box>
    )
}

export default Home
