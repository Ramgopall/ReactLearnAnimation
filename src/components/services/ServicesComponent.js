import React from 'react';
import '../../styles/ServicesComponent.css';
import DvrIcon from '@material-ui/icons/Dvr';

const ServicesComponent = ({ icon, header, description }) => {
    const TheIcon = icon;
    return (
        <div className="servicesComponent">
            <div className="servicesComponentData">
                <TheIcon className="icons" />
                <div className="innerContent">
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent
