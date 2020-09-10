import React from 'react'
import Box from "@material-ui/core/Box";
import ServicesComponent from './ServicesComponent';
import ComputerIcon from '@material-ui/icons/Computer';
import ExtensionIcon from '@material-ui/icons/Extension';
import RateReviewIcon from '@material-ui/icons/RateReview';
import "../../styles/Services.css";

import '../../styles/Home.css'

const Services = () => {
    return (
        <Box className="services-root" >
            <div className="services-title">Services</div>
            <div className="services-divider" />
            <div className="servicesContent">
                <ServicesComponent icon={ComputerIcon} header="Web Design" description={['Lorem ipsum dolor sit amet, consectetur adipiscing elit,', <br />, 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', <br />, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco']} />
                <ServicesComponent icon={RateReviewIcon} header="App Design" description={['Lorem ipsum dolor sit amet, consectetur adipiscing elit,', <br />, 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', <br />, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco']} />
                <ServicesComponent icon={ExtensionIcon} header="Graphic Design" description={['Lorem ipsum dolor sit amet, consectetur adipiscing elit,', <br />, 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', <br />, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco']} />
            </div>
        </Box>
    )
}

export default Services
