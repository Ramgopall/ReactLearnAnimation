import React from 'react'
import Box from "@material-ui/core/Box";
import { useSpring, animated } from 'react-spring';
import "../../styles/Resume.css";

import YellowDot from '../YellowDot';

const Resume = () => {
    const animm = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 }, delay: 500 })
    return (
        <Box className="services" >
            <animated.div style={animm} className="services-title">Resume</animated.div>
            <animated.div style={animm} className="services-divider" />
            <div className="baseLine">
                <div className="line" />
                <YellowDot className="yellow-dot" />
                <YellowDot className="yellow-dot-two" />
            </div>
        </Box>
    )
}

export default Resume
