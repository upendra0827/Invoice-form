import React from "react";
import './styles.css'

const Header = ({ icon, heading }) => {
    return (
        <div className="vendor-details__heading">
            <img src={icon} alt="vendor-details-icon" />
            <span>{heading}</span>
        </div>
    )
};

export default Header;
