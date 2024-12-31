import React from "react";
import { Field, ErrorMessage } from 'formik';
import FormikDatePicker from '../components/shared/DatePicker/index'
import ChevronDownIcon from '../assets/icons/ChevronDown.svg'
import CurrencyForm from "../components/shared/Currency";
import * as Yup from 'yup';
import StarIcon from '../assets/icons/Star.svg'

const getFieldValue = (props, name) => {
    const array = name.split('.');

    const ans = array.reduce((acc, key) => {
        return acc ? acc[key] : undefined;
    }, props.values);

    return ans
};

export const checkFieldTouched = (props, name) => {
    const array = name.split('.');
    let isTouched = props.touched

    for (let i = 0; i < array.length; i++) {
        if (!isTouched || !isTouched[array[i]]) {
            return null;
        }
        isTouched = isTouched[array[i]];
    }

    return isTouched
}

export const checkFieldError = (props, name) => {
    if (!checkFieldTouched(props, name)) return false
    const array = name.split('.');
    let error = props.errors;

    for (let i = 0; i < array.length; i++) {
        if (!error || !error[array[i]]) {
            return null;
        }
        error = error[array[i]];
    }

    return error;
}

export const renderForm = (props, element) => {
    switch (element.type) {
        case 'text':
            return (
                <div className="input-field" >
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {element.label && <label htmlFor={element.name}>{element.label}</label>}
                        {element.important && <img src={StarIcon} alt="star" width='6px' />}
                    </div>
                    <Field
                        name={element.name}
                        id={element.name}
                        type={element.formType || element.type}
                        placeholder={element.placeholder}
                        style={{
                            height: '41px',
                            padding: '8px',
                            border: !checkFieldError(props, element.name) ? "1px solid #64748B" : '1px solid red',
                            backgroundImage: `url('${element.icon}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center',
                            backgroundSize: '12px',
                            appearance: 'none',
                        }}
                    />
                    <ErrorMessage className="error" name={element.name} component="div" style={{ color: 'red' }} />
                </div>
            )

        case 'currency-text':
            return (
                <div className="input-field currency">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {element.label && <label htmlFor={element.name}>{element.label}</label>}
                        {element.important && <img src={StarIcon} alt="star" width='6px' />}
                    </div>
                    <CurrencyForm props={props} element={element} />
                    <ErrorMessage className="error" name={element.name} component="div" style={{ color: "red" }} />
                </div>
            )

        case 'dropdown':
            return (
                <div className="input-field">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {element.label && <label htmlFor={element.name}>{element.label}</label>}
                        {element.important && <img src={StarIcon} alt="star" width='6px' />}
                    </div>
                    <Field
                        as="select"
                        name={element.name}
                        id={element.name}
                        style={{
                            height: '41px',
                            padding: "8px",
                            border: !checkFieldError(props, element.name) ? "1px solid #64748B" : '1px solid red',
                            borderRadius: "8px",
                            width: "100%",
                            color: !element.options.filter(option => option.label === getFieldValue(props, element.name)).length ? "#aaa" : '#0D0F11',
                            backgroundColor: 'white',
                            backgroundImage: `url('${ChevronDownIcon}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center',
                            backgroundSize: '12px',
                            appearance: 'none',
                        }}
                    >
                        {element.placeholder && <option value="" disabled>{element.placeholder}</option>}
                        {element.options.map((option, i) => (
                            <option key={option.id} value={option.value}
                                style={{
                                    color: 'black',
                                }}>
                                {option.label}
                            </option>
                        ))}
                    </Field>
                    {element.showHelperText && <label>{element.selectedLocation}</label>}
                    <ErrorMessage className="error" name={element.name} component="div" style={{ color: "red" }} />
                </div>
            )

        case 'calender':
            return (
                <div className="input-field">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {element.label && <label htmlFor={element.name}>{element.label}</label>}
                        {element.important && <img src={StarIcon} alt="star" width='6px' />}
                    </div>
                    <FormikDatePicker element={element} props={props} />
                    <ErrorMessage className="error" name={element.name} component="div" style={{ color: "red" }} />
                </div>
            )

        default:
            return <div></div>
    }
};

const vendorInformationValidationSchema = Yup.object({
    vendor: Yup.string().required('Vendor is required'),
});

const invoiceDetailsValidationSchema = Yup.object({
    purchaseOrderNumber: Yup.string().required('Purchase Order Number is required'),
    invoiceNumber: Yup.string().required('Invoice Number is required'),
    invoiceDate: Yup.date().required('Invoice Date is required').nullable(),
    totalAmount: Yup.number().required('Total Amount is required').positive('Total Amount must be positive'),
    paymentTerms: Yup.string().required('Payment Terms are required'),
    invoiceDueDate: Yup.date().required('Invoice Due Date is required').nullable(),
    glPostDate: Yup.date().required('GL Post Date is required').nullable(),
    invoiceDescription: Yup.string().required('Invoice Description is required'),
    expenseDetails: Yup.object({
        lineAmount: Yup.number().required('Line Amount is required').positive('Line Amount must be positive'),
        department: Yup.string().required('Department is required'),
        account: Yup.string().required('Account is required'),
        location: Yup.string().required('Location is required'),
        description: Yup.string().required('Description is required')
    })
});

const commentsValidationSchema = Yup.object({
    comment: Yup.string(),
});

const validationSchema = Yup.object({
    vendorInformation: vendorInformationValidationSchema,
    invoiceDetails: invoiceDetailsValidationSchema,
    comments: commentsValidationSchema,
    uploadedFile: Yup.mixed()
});

export { validationSchema, vendorInformationValidationSchema, invoiceDetailsValidationSchema, commentsValidationSchema };
