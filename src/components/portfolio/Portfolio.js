import React from 'react'
import Box from "@material-ui/core/Box";
import { Divider, Typography } from '@material-ui/core';

import "../../styles/Portfolio.css";

const Portfolio = () => {
    return (
        <Box className="portfolio-root" >
            <Typography className="portfolio-title">Portfolio</Typography>
            <Divider className="portfolio-divider" />
            <Box className="portfolio-container">
                <img src={'https://colorlib.com/wp/wp-content/uploads/sites/2/gentium-designer-website-template.jpg'} alt="" className="portfolio-image" />
                <img src={'https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-designer-website-template.jpg'} alt="" className="portfolio-image" />
                <img src={'https://elements-cover-images-0.imgix.net/10ee90e6-bfef-418a-a238-63dc17946ffe?auto=compress%2Cformat&fit=max&w=710&s=0883a2b8dec791eb5c9e44fbadadb96c'} alt="" className="portfolio-image" />
            </Box>
            <Box className="portfolio-container">
                <img src={'https://img.freepik.com/free-vector/business-landing-page-template-with-photo_52683-19539.jpg?size=626&ext=jpg'} alt="" className="portfolio-image" />
                <img src={'https://i.ytimg.com/vi/X75yaSgMn0M/maxresdefault.jpg'} alt="" className="portfolio-image" />
                <img src={'https://templated.co/items/thumbnails/hielo.jpg'} alt="" className="portfolio-image" />
            </Box>
            <Box className="portfolio-container">
                <img src={'https://colorlib.com/wp/wp-content/uploads/sites/2/sofbox-software-professional-website-template.jpg'} alt="" className="portfolio-image" />
            </Box>
        </Box>
    )
}

export default Portfolio
