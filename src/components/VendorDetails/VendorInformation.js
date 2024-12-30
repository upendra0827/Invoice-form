import React from "react";
import { renderForm } from "../../helpers/utility";
import ChevronDownBlueIcon from '../../assets/icons/ChevronDownBlue.svg'
import SubHeader from "../shared/SubHeader";

const VendorInformation = ({ initialState, formikProps }) => {

    const vendors = [
        { id: 1, label: "Vendor A", location: "New York", category: "Electronics", rating: 4.5 },
        { id: 2, label: "Vendor B", location: "San Francisco", category: "Clothing", rating: 4.0 },
        { id: 3, label: "Vendor C", location: "Chicago", category: "Furniture", rating: 3.8 },
        { id: 4, label: "Vendor D", location: "Los Angeles", category: "Groceries", rating: 4.7 },
        { id: 5, label: "Vendor E", location: "Miami", category: "Toys", rating: 3.9 },
        { id: 6, label: "Vendor F", location: "Austin", category: "Books", rating: 4.2 },
        { id: 7, label: "Vendor G", location: "Seattle", category: "Tools", rating: 4.4 },
        { id: 8, label: "Vendor H", location: "Boston", category: "Beauty", rating: 4.3 },
        { id: 9, label: "Vendor I", location: "Denver", category: "Sports", rating: 4.6 },
        { id: 10, label: "Vendor J", location: "Houston", category: "Home Decor", rating: 4.1 }
    ];

    const vendor = formikProps.values.vendorInformation.vendor;

    const selectedLocation = vendors.filter(a => a.label === vendor)[0]?.location

    return (
        <div className="vendor-details__information">
            <SubHeader heading={'Vendor Information'} />
            <form>
                {renderForm(formikProps, {
                    name: 'vendorInformation.vendor',
                    placeholder: 'Select a vendor',
                    label: 'Vendor',
                    type: 'dropdown',
                    options: vendors,
                    showHelperText: true,
                    selectedLocation,
                    important: true
                })}
            </form>
            <div className="vendor-details__supporting-text">
                <img src={ChevronDownBlueIcon} alt="chevron-down" />
                <div>View Vendor Details</div>
            </div>
        </div>
    )
};

export default VendorInformation;
