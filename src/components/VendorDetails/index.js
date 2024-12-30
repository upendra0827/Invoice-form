import React from "react";
import VendorDetailsIcon from '../../assets/icons/VendorDetails.svg'
import './styles.css'
import VendorInformation from "./VendorInformation";
import Header from "../shared/Header";

const VendorDetailsContainer = ({ initialState, formikProps }) => {
    return (
        <div className="vendor-details" id="vendor-details">
            <Header icon={VendorDetailsIcon} heading={'Vendor Details'} />
            <VendorInformation initialState={initialState} formikProps={formikProps} />
        </div>
    )
};

export default VendorDetailsContainer;
