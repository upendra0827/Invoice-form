import React, { useState } from "react";
import SubHeader from "../shared/SubHeader";
import BackArrowIcon from '../../assets/icons/BackArrow.svg'
import Tab from "./Tab";
import './styles.css'

const InvoiceHeaderContainer = ({ setIsUserLoggedIn }) => {
    const [selected, setSelected] = useState('Vendor Details')

    const handleLogOut = () => {
        localStorage.removeItem('userData')
        setIsUserLoggedIn(false)
    }

    return (
        <div className="invoice-header-container">
            <div className="">
                <img src={BackArrowIcon} alt="back-arrow" />
                <SubHeader heading={'Create New Invoice'} />
            </div>
            <div>
                <Tab selected={selected} setSelected={setSelected} link={'#vendor-details'} text={'Vendor Details'} />
                <Tab selected={selected} setSelected={setSelected} link={'#invoice'} text={'Invoice Details'} />
                <Tab selected={selected} setSelected={setSelected} link={'#comments'} text={'Comments'} />
                <button className="tab-text" onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
        </div>
    )
};

export default InvoiceHeaderContainer;
