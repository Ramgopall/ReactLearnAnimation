import React from 'react'
import Box from "@material-ui/core/Box";
import { Divider, Typography } from '@material-ui/core';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import "../../styles/Contact.css";

const Contact = () => {
    return (
        <Box className="contact-root" >
            <Typography className="contact-title">Contacts</Typography>
            <Divider className="contact-divider" />
            <Box className="contact-container">
                <LocalPhoneIcon className="contact-icon" />
                <Typography className="contact-text"> +01-0000-0000 </Typography>
            </Box>
            <Box className="contact-container">
                <MailOutlineIcon className="contact-icon" />
                <Typography className="contact-text"> info@example.com </Typography>
            </Box>
            <Box className="contact-container">
                <LocationOnIcon className="contact-icon" />
                <Typography className="contact-text"> 401 Fifth Avenue - 4th Floor, New York, NY</Typography>
            </Box>
            <img src={require('../../assets/map.jpg')} className="contact-image" alt="" />
        </Box>
    )
}

export default Contact
