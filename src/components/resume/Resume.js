import React from 'react'
import Box from "@material-ui/core/Box";
import "../../styles/Resume.css";
import { Divider, Typography } from '@material-ui/core';

const Resume = () => {
    return (
        <Box className="resume-root" >
            <Typography className="resume-title">Resume</Typography>
            <Divider className="resume-divider" />
            <Box className="resume-container">
                <div className="resume-dot" />
                <Box className="resume-text-container">
                    <Typography className="resume-text-title">Facebook</Typography>
                    <Typography className="resume-text-date">2012-2014:Graphic Designer</Typography>
                    <Typography className="resume-text-desc">I am a creative web designer and developer front end. I do live<br />art, illustration, web design, App design, UI & UX design and<br />other digital products </Typography>
                </Box>
            </Box>
            <Box className="resume-container">
                <div className="resume-dot" />
                <Box className="resume-text-container">
                    <Typography className="resume-text-title">Google</Typography>
                    <Typography className="resume-text-date">2012-2014:Graphic Designer</Typography>
                    <Typography className="resume-text-desc">I am a creative web designer and developer front end. I do live<br />art, illustration, web design, App design, UI & UX design and<br />other digital products </Typography>
                </Box>
            </Box>
            <Box className="resume-container">
                <div className="resume-dot" />
                <Box className="resume-text-container">
                    <Typography className="resume-text-title">Apple</Typography>
                    <Typography className="resume-text-date">2012-2014:Graphic Designer</Typography>
                    <Typography className="resume-text-desc">I am a creative web designer and developer front end. I do live<br />art, illustration, web design, App design, UI & UX design and<br />other digital products </Typography>
                </Box>
            </Box>
            <Box className="resume-container">
                <div className="resume-dot" />
                <Box className="resume-text-container">
                    <Typography className="resume-text-title">Envato</Typography>
                    <Typography className="resume-text-date">2012-2014:Graphic Designer</Typography>
                    <Typography className="resume-text-desc">I am a creative web designer and developer front end. I do live<br />art, illustration, web design, App design, UI & UX design and<br />other digital products </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Resume
