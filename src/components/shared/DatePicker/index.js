import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};


const FormikDatePicker = ({ props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <div style={{}}>
            <DatePicker
                id={props.name}
                {...field}
                {...props}
                dateFormat="MM/dd/yyyy"
                selected={(field.value && formatDate(new Date(field.value))) || null}
                onChange={(val) => setFieldValue(props.name, formatDate(val))}
                placeholderText={props.placeholder}
                className="date-picker"
                maxDate={props.maxDate}
                minDate={props.minDate}
            />
        </div>
    );
};

export default FormikDatePicker;
