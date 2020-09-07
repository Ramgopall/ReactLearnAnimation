import React from 'react'
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useSpring, animated } from 'react-spring'

import boy from '../../assets/boy.png'
import '../../styles/Home.css'

const Profile = () => {

    const storageAnim = useSpring({ marginRight: 0, from: { marginRight: -400 }, config: { duration: 500 } })
    return (
        <>
            <animated.div style={storageAnim} className="social_logo">
                <FacebookIcon className="social_fb" />
                <InstagramIcon className="social_is" />
                <TwitterIcon className="social_tw" />
                <YouTubeIcon className="social_yt" />
            </animated.div>

            <animated.div style={storageAnim} className="titleName">
                <Typography className="im">I'm</Typography>
                <Typography className="name">John Smith</Typography>
            </animated.div>
            <animated.div style={storageAnim} className="profile-name">Web Designer &amp; Front-end Developer</animated.div>
            <animated.div style={storageAnim} className="profile-image-container">
                <img src={boy} className="profile-image" alt="" />
            </animated.div>
        </>
    )
}

export default Profile
