import DropDown from "./DropDown";
import FilterSeater from "./FilterSeater";
import classes from './Filters.module.css';

const Filters=props=>{
    const dropDownChangeHandler=event=>{
        props.sortOn(event);
    }

    const seaterSelectedHandler=event=>{
        console.log(event,+event,event===+event,typeof(event))
        props.selectedSeats(event)
    }

    return <div  className={classes.filters} >
        <DropDown dropDownChangeHandler={dropDownChangeHandler}></DropDown>
        <FilterSeater selectedSeater={seaterSelectedHandler}></FilterSeater>
    </div>
}


export default Filters;
