import React from 'react';
import { Formik, Form } from 'formik';
import './styles.css'
import { renderForm } from '../../helpers/utility';
import { Button } from '../shared/Buttons';

const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username is required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
};

const LoginForm = ({ setIsUserLoggedIn }) => {
    const initialValues = {
        username: '',
        password: ''
    };

    const handleSubmit = (values, { setSubmitting }) => {
        localStorage.setItem('userData', JSON.stringify(values));
        setIsUserLoggedIn(true)
        setSubmitting(false);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {(formikProps) => (
                    <Form>
                        {renderForm(formikProps, {
                            name: 'username',
                            placeholder: 'Username',
                            label: 'Username',
                            type: 'text',
                            important: true
                        })}
                        <div>
                            {renderForm(formikProps, {
                                name: 'password',
                                placeholder: 'Password',
                                label: 'Password',
                                type: 'text',
                                formType: 'password',
                                important: true
                            })}
                        </div>

                        <div>
                            <Button text={formikProps.isSubmitting ? 'Submitting...' : 'Login'} version={'version-2'} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
