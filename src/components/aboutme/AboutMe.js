import React from 'react'
import Box from "@material-ui/core/Box";
import { useSpring, animated } from 'react-spring'

import '../../styles/Home.css'

const AboutMe = () => {
    const animm = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 }, delay: 500 })
    return (
        <Box className="aboutme" >
            <animated.div style={animm} className="aboutme-title">About Me</animated.div>
            <animated.div style={animm} className="aboutme-divider" />
            <animated.div style={animm} className="aboutme-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br />
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only<br />
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum <br /> <br />


                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br />
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only<br />
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </animated.div>
        </Box>
    )
}

export default AboutMe
