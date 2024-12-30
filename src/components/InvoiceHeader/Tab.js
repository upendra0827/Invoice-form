import React, { useState } from "react";

const Tab = ({ text, selected, setSelected, link }) => {

    return (
        <div className={`tab-text ${selected === text && 'selected-tab'}`}
            onClick={() => {
                const element = document.querySelector(link);
                setSelected(text)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }}
        >{text}</div>
    )
};

export default Tab;
