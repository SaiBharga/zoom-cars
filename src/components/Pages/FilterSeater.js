
import { useCallback, useState } from 'react';
import classes from './FilterSeater.module.css';

const FilterSeater = props =>{
  const [selectedSeater,setSelectedSeater]=useState(0);
  const clickHandler= event=>{
    let seats=!event.target.className.includes(classes.selected)?+event.target.innerHTML:0;
    setSelectedSeater(seats)
    props.selectedSeater(seats)
  }

  const getClassName=seats=> 
  {
    return `${selectedSeater===seats?classes.selected:''} ${classes.button}`;
  }
  return (
        <div className={classes.seater}>
        <label>Seater</label>
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

