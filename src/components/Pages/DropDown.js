import React, { useContext} from "react";
import FilterContext from "../Context/filter-context";
import classes from './DropDown.module.css'

const DropDown = props =>{

    const filtercontext=useContext(FilterContext)

    const changeHandler=event =>{
        filtercontext.sortOnChange(event.target.value)
    }

    return <>
    <label className={classes.label}>Sort based on</label>
    <select onChange={changeHandler} value={filtercontext.sortOn}>
    <option value="title">title</option>
        <option value="rating">rating</option>
        <option value="price">price</option>
    </select>
    </>;
}



export default DropDown;
