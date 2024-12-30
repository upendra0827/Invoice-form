import React from "react";
import { Field, ErrorMessage } from 'formik';
import CurrencyIcon from '../../../assets/icons/Currency.svg'
import './styles.css'

const CurrencyForm = ({ props }) => {
    return (
        <div className="currency">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={CurrencyIcon} alt="currency-icon" style={{ border: '1px solid #64748B', borderRight: 'none' }} />
                <Field
                    name={props.name}
                    id={props.name}
                    type={'number'}
                    placeholder={props.placeholder}
                    className='currency-field'
                    style={{
                        backgroundImage: `url('${props.icon}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 10px center',
                        appearance: 'none',
                    }}
                />
            </div>
            <ErrorMessage name="username" component="div" style={{ color: "red", marginTop: "4px" }} />
        </div>
    )
};

export default CurrencyForm;
