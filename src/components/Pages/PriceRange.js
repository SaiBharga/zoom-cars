import { useEffect, useState } from "react";

const maxPrice=[550,650,750,850,950,1050,1150,1250,1350,1450,1550];

const PriceRange = props=>{
    const [range,setRange]=useState({
        min:450,
        max:1550
    });

    const minimumSelector=event=>{
        setRange(prevRange=>
            {
                const temp={ ...prevRange,min:+event.target.value};
                temp.max=temp.min>temp.max?1550:temp.max;
                console.log(temp)
                props.onRange(temp);
                return temp;
            })
    }

    const maximumSelector=event=>{
        setRange(prevRange=>
            {
                const temp={ ...prevRange,max:+event.target.value};
                console.log(temp)
                props.onRange(temp);
                return temp;
            })
    }

    return (
        <div>
 <select value={range.min} onChange={minimumSelector}>
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

{<select value={range.max} onChange={maximumSelector}>
    { range.min<550 &&	<option value="550">550</option>}
	{ range.min<650 &&<option value="650">650</option>}
	{ range.min<750 &&<option value="750">750</option>}
    { range.min<850 &&<option value="850">850</option>}
    { range.min<950 &&<option value="950">950</option>}
    { range.min<1050 &&<option value="1050">1050</option>}
    { range.min<1150 &&<option value="1150">1150</option>}
    { range.min<1250 &&<option value="1250">1250</option>}
    { range.min<1350 &&<option value="1350">1350</option>}
 {  range.min<1450 &&  <option value="1450">1450</option>}
 {  range.min<1550 && <option value="1550" selected>1550</option>}
</select>
}
        </div>
    );

}


export default PriceRange;
