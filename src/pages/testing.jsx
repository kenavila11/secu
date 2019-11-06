import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function Testing(props) {

    // const [name, setName] = useState("Ken");

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }

    let location = useLocation();

    console.log(location)
    
    return (
        <div className="secu-testing">
            {/* <input 
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="">{name}</label> */}
        </div>
    )
}