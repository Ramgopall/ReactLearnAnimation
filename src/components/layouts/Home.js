import React from 'react'
import Box from "@material-ui/core/Box";
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import boy from '../../assets/boy.png'
import Nav from '../nav/Nav'
import '../../styles/Home.css'

const Home = () => {
    return (
        <Box className="root" >
            <Nav />
            <Box className="container">
                <Box className="back-color" />
                <Box className="back-color-two" />
                <Box className="social_logo">
                    <FacebookIcon className="social_fb" />
                    <InstagramIcon className="social_is" />
                    <TwitterIcon className="social_tw" />
                    <YouTubeIcon className="social_yt" />
                </Box>
                <Box className="titleName">
                    <Typography className="im">I'm</Typography>
                    <Typography className="name">John Smith</Typography>
                </Box>
                <Typography className="profile-name">Web Designer &amp; Front-end Developer</Typography>
                <img src={boy} className="profile-image" alt="" />
            </Box>

        </Box>
    )
}

export default Home
