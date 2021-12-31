import DropDown from "./DropDown";
import FilterSeater from "./FilterSeater";
import classes from './Filters.module.css';
import PriceRange from "./PriceRange";
import { useContext } from "react";
import FilterContext from "../Context/filter-context";

const getArray=count=>{
    const arr=[];
    for(let i=1;i<count;i++){
        arr[i]=i+1;
    }
    if(count===1) arr[0]=1;
    return arr;
}

const Filters=props=>{

    const context=useContext(FilterContext);
    
    const changeEventHandler=event=>{
        context.itemsPerPageChange(+event.target.value);
    }
    let carsCount = context.cars.length;

    return <div  className={classes.filters} >
        <DropDown></DropDown>
        <FilterSeater></FilterSeater>
        <PriceRange></PriceRange>
        <div>
            <label className={classes.label}>Cars per page</label>
            <select onChange={changeEventHandler}>
                {getArray(carsCount).map(cv=> <option value={cv}>{cv}</option>)}
            </select>
        </div>
    </div>
}


export default Filters;
