import React from "react";
import { renderForm } from "../../helpers/utility";
import { Formik, Form } from "formik";
import SubHeader from "../shared/SubHeader";

const GeneralDetails = ({ initialState, formikProps }) => {

    const purchaseOrdersNumbers = [
        { id: 0, label: 'Select PO Number', value: null },
        { id: 1, label: "Purchase Order 1", value: "PO-2024-001" },
        { id: 2, label: "Purchase Order 2", value: "PO-2024-002" },
        { id: 3, label: "Purchase Order 3", value: "PO-2024-003" },
        { id: 4, label: "Purchase Order 4", value: "PO-2024-004" },
        { id: 5, label: "Purchase Order 5", value: "PO-2024-005" },
        { id: 6, label: "Purchase Order 6", value: "PO-2024-006" },
        { id: 7, label: "Purchase Order 7", value: "PO-2024-007" },
        { id: 8, label: "Purchase Order 8", value: "PO-2024-008" },
        { id: 9, label: "Purchase Order 9", value: "PO-2024-009" },
        { id: 10, label: "Purchase Order 10", value: "PO-2024-010" }
    ];


    return (
        <div className="general-nformation">
            <SubHeader heading={'General Information'} />
            <form>
                {renderForm(formikProps, {
                    name: 'invoiceDetails.purchaseOrderNumber',
                    placeholder: '',
                    label: 'Purchase Order Number',
                    type: 'dropdown',
                    options: purchaseOrdersNumbers,
                    important: true
                })}
            </form>
        </div>
    )
};

export default GeneralDetails;
