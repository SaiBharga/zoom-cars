import React, { useState } from "react";


const DropDown = props =>{

    const [value,setValue]=useState('');

    const changeHandler=event =>{
        setValue(event.target.value);  
        props.dropDownChangeHandler(event.target.value);
    }

    return <select onChange={changeHandler} value={value}>
    <option value="title">title</option>
        <option value="rating">rating</option>
        <option value="price">price</option>
    </select>;
}



export default DropDown;
