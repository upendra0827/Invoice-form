import React from "react";
import './styles.css'
import Header from "../shared/Header";
import CommentsIcon from '../../assets/icons/Comments.svg'
import { renderForm } from "../../helpers/utility";
import { Formik, Form } from "formik";
import './styles.css'
import SendIcon from '../../assets/icons/Send.svg'

const CommentsContainer = ({ initialState, formikProps }) => {

    const countryOptions = [
        { value: "", label: "Select a country" },
        { value: "us", label: "United States" },
        { value: "in", label: "India" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
    ];

    return (
        <div id="comments">
            <Header icon={CommentsIcon} heading={'Comments'} />
            <form>
                <div>
                    {renderForm(formikProps, {
                        name: 'comments.comment',
                        placeholder: 'Add a comment and use @Name to tag someone',
                        label: '',
                        type: 'text',
                        options: countryOptions,
                        icon: SendIcon,
                    })}
                </div>
            </form>
        </div>
    )
};

export default CommentsContainer;
