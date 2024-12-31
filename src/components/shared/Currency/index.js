import React from "react";
import { Field, ErrorMessage } from 'formik';
import CurrencyIcon from '../../../assets/icons/Currency.svg'
import './styles.css'
import { checkFieldError } from "../../../helpers/utility";

const CurrencyForm = ({ props, element }) => {
    return (
        <div className="currency">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={CurrencyIcon} alt="currency-icon" className="currency-icon" style={{ border: "1px solid #64748B", borderRight: 'none' }} />
                <Field
                    name={element.name}
                    id={element.name}
                    type={'number'}
                    placeholder={element.placeholder}
                    className='currency-field'
                    style={{
                        backgroundImage: `url('${element.icon}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 10px center',
                        appearance: 'none',
                        border: !checkFieldError(props, element.name) ? "1px solid #64748B" : '1px solid red',
                    }}
                />
            </div>
            <ErrorMessage name="username" component="div" style={{ color: "red", marginTop: "4px" }} />
        </div>
    )
};

export default CurrencyForm;
