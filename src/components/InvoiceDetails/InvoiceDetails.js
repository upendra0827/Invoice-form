import React from "react";
import { renderForm } from "../../helpers/utility";
import SubHeader from "../shared/SubHeader";
import CurrencyCodeIcon from '../../assets/icons/CurrencyCode.svg'

const InvoiceDetails = ({ initialState, formikProps }) => {

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

    const paymentTerms = [
        { id: 1, label: "Net 30 Days", value: "NET_30" },
        { id: 2, label: "Net 60 Days", value: "NET_60" },
        { id: 3, label: "Net 90 Days", value: "NET_90" },
        { id: 4, label: "Due on Receipt", value: "DUE_ON_RECEIPT" },
        { id: 5, label: "1% 10 Net 30", value: "DISCOUNT_1_10_NET_30" },
        { id: 6, label: "COD (Cash on Delivery)", value: "COD" },
        { id: 7, label: "EOM (End of Month)", value: "EOM" },
        { id: 8, label: "2/10 Net 30", value: "DISCOUNT_2_10_NET_30" },
        { id: 9, label: "Advance Payment", value: "ADVANCE" },
        { id: 10, label: "Partial Payment", value: "PARTIAL" }
    ];


    return (
        <div>
            <SubHeader heading={'Invoice Details'} />
            <form className="invoice-details-form">
                <div>
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.invoiceNumber',
                        placeholder: 'Select a vendor',
                        label: 'Invoice Number',
                        type: 'dropdown',
                        options: vendors,
                        important: true
                    })}
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.invoiceDate',
                        placeholder: 'MM/DD/YYYY',
                        label: 'Invoice Date',
                        type: 'calender',
                        important: true,
                        maxDate: new Date()
                    })}
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.totalAmount',
                        placeholder: '',
                        label: 'Total Amount',
                        type: 'currency-text',
                        important: true,
                        icon: CurrencyCodeIcon,
                    })}
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.paymentTerms',
                        placeholder: 'Select',
                        label: 'Payment Terms',
                        type: 'dropdown',
                        options: paymentTerms,
                        important: true
                    })}
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.invoiceDueDate',
                        placeholder: 'MM/DD/YYYY',
                        label: 'Invoice Due Date',
                        type: 'calender',
                        important: true
                    })}
                    {renderForm(formikProps, {
                        name: 'invoiceDetails.glPostDate',
                        placeholder: 'MM/DD/YYYY',
                        label: 'GL Post Date',
                        type: 'calender',
                        important: true,
                        maxDate: new Date()
                    })}
                </div>
                {renderForm(formikProps, {
                    name: 'invoiceDetails.invoiceDescription',
                    placeholder: '',
                    label: 'Invoice Description',
                    type: 'text',
                    important: true
                })}
            </form>
        </div>
    )
};

export default InvoiceDetails;
