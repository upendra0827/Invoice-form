import React from "react";
import Header from "../shared/Header";
import InvoiceIcon from '../../assets/icons/Invoice.svg'
import GeneralDetails from "./GeneralDetails";
import InvoiceDetails from "./InvoiceDetails";
import './styles.css'
import ExpenseDetailsContainer from "../ExpenseDetails";

const InvoiceDetailsContainer = ({ initialState, formikProps }) => {

    return (
        <div id="invoice">
            <Header icon={InvoiceIcon} heading={'Invoice Details'} />
            <GeneralDetails initialState={initialState} formikProps={formikProps} />
            <InvoiceDetails initialState={initialState} formikProps={formikProps} />
            <ExpenseDetailsContainer initialState={initialState.expenseDetails} formikProps={formikProps} />
        </div>
    )
};

export default InvoiceDetailsContainer;
