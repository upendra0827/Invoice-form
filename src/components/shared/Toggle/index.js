import React, { useState } from "react";
import './styles.css'

const Toggle = () => {

    const [selected, setSelected] = useState('$')

    return (
        <div className="options" onClick={() => setSelected(prev => prev === '$' ? '%' : '$')}>
            <span className={selected === '$' && 'selected'} >$</span>
            <span className={selected === '%' && 'selected'} >%</span>
        </div>
    )
};

export default Toggle;
