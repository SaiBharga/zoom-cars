import React,{ useContext } from "react";
import classes from './PriceRange.module.css';
import FilterContext from "../Context/filter-context";

const PriceRange = props=>{

    const filtercontext=useContext(FilterContext);

    const minimumSelector= event=>{
        filtercontext.minPriceChange(+event.target.value);
    }

    const maximumSelector=event=>{
        filtercontext.maxPriceChange(+event.target.value);
    };

    return (
        <div>
            <label className={classes.label}>Minimum</label>
 <select className={classes.select} value={filtercontext.min} onChange={minimumSelector}>
	<option value="450">450</option>
	<option value="550">550</option>
	<option value="650">650</option>
	<option value="750">750</option>
    <option value="850">850</option>
    <option value="950">950</option>
    <option value="1050">1050</option>
    <option value="1150">1150</option>
    <option value="1250">1250</option>
    <option value="1350">1350</option>
    <option value="1450">1450</option>
</select>
<label className={classes.label}>Maximum</label>
{<select value={filtercontext.max} onChange={maximumSelector}>
    { filtercontext.min<550 &&	<option value="550">550</option>}
	{ filtercontext.min<650 &&<option value="650">650</option>}
	{ filtercontext.min<750 &&<option value="750">750</option>}
    { filtercontext.min<850 &&<option value="850">850</option>}
    { filtercontext.min<950 &&<option value="950">950</option>}
    { filtercontext.min<1050 &&<option value="1050">1050</option>}
    { filtercontext.min<1150 &&<option value="1150">1150</option>}
    { filtercontext.min<1250 &&<option value="1250">1250</option>}
    { filtercontext.min<1350 &&<option value="1350">1350</option>}
 {  filtercontext.min<1450 &&  <option value="1450">1450</option>}
 {  filtercontext.min<1550 && <option value="1550">1550</option>}
</select>
}
        </div>
    );

}

export default React.memo(PriceRange);
