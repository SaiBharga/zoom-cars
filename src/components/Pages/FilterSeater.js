
import { useContext } from 'react';
import classes from './FilterSeater.module.css';

import Filtercontext from '../Context/filter-context';
const FilterSeater = props =>{

  const filtercontext= useContext(Filtercontext)

  const clickHandler= event=>{
    let seats=!event.target.className.includes(classes.selected)?+event.target.innerHTML:0;
    filtercontext.seatsChange(seats)
  }

  const getClassName=seats=> 
  {
    return `${filtercontext.seats===seats?classes.selected:''} ${classes.button}`;
  }
  return (
        <div className={classes.seater}>
        <label className={classes.label}>Seater</label>
          <button type="button"
           className={getClassName(4)} onClick={clickHandler}>4</button>
          <button type="button" 
          className={getClassName(5)} onClick={clickHandler}>5</button>
          <button type="button"
           className={getClassName(6)} onClick={clickHandler}>6</button>
        </div>

    );
}

export default FilterSeater;

