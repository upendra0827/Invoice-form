import React from "react";
import { Field, ErrorMessage } from 'formik';
import CurrencyIcon from '../../../assets/icons/Currency.svg'
import './styles.css'
import { checkFieldError } from "../../../helpers/utility";

const CurrencyForm = ({ props, element }) => {
    return (
        <div className="currency">
            <div style={{ display: "flex", alignItems: "center" }}>
                <Field
                    name={element.name}
                    id={element.name}
                    type={'number'}
                    placeholder={element.placeholder}
                    className='currency-field'
                    style={{
                        border: !checkFieldError(props, element.name) ? "1px solid #64748B" : '1px solid red',
                    }}
                />
            </div>
            <ErrorMessage name="username" component="div" style={{ color: "red", marginTop: "4px" }} />
        </div>
    )
};

export default CurrencyForm;
