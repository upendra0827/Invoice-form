import React from "react";
import './styles.css'

export const Button = ({ text, version, onClick }) => {
    return (
        <button onClick={onClick} className={version}>
            {text}
        </button>
    )
};

