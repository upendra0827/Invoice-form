import React from "react";
import IconButton from '../../assets/icons/IconButton.svg'
import { Button } from "../shared/Buttons";
import './styles.css'

const Footer = ({ submitForm, handleSaveDraft }) => {
    return (
        <div className="footer">
            <img src={IconButton} alt="icon-btn" />
            <Button onClick={handleSaveDraft} text={'Save as Draft'} version={'version-1'} />
            <Button onClick={() => {
                submitForm()
            }} text={'Submit & New'} version={'version-2'} />
        </div>
    )
};

export default Footer;
