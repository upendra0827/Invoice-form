import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'
import { checkFieldError } from '../../../helpers/utility';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};


const FormikDatePicker = ({ element, props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(element);
    return (
        <div style={{}}>
            <DatePicker
                id={element.name}
                {...field}
                {...element}
                dateFormat="MM/dd/yyyy"
                selected={(field.value && formatDate(new Date(field.value))) || null}
                onChange={(val) => setFieldValue(element.name, formatDate(val))}
                placeholderText={element.placeholder}
                className={`date-picker ${checkFieldError(props, element.name) ? 'date-error' : 'date-success'}`}
                maxDate={element.maxDate}
                minDate={element.minDate}
            />
        </div>
    );
};

export default FormikDatePicker;
