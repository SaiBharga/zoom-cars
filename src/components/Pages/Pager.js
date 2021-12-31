
import { useContext } from 'react';
import FilterContext from '../Context/filter-context';
import classes from './Pager.module.css'

const getArray=(count)=>{
    const arr=[];
    if(count!==1){
        arr[0]='first';
        for(let i=1;i<count-1;i++){
            arr[i]=i;
        }
        arr[count-1]='last';
    }
    else{
        arr[0]='';
    }
    return arr;
}

const Pager =props=>{

    const context=useContext(FilterContext);

    const pageSelectHandler=event=>{
        context.pageChange(+event.target.attributes.index.value)
    }

    const getClassName=page=> 
    {
      return `${context.page===page?classes.selected:''} ${classes.button}`;
    }
    
    return <div className={classes.pages}>
        { getArray(props.count).length > 1 &&
         getArray(props.count).map(
             (element,index)=>
            <button className={getClassName(index+1)} key={element} index={index+1} onClick={pageSelectHandler}>{element}</button>
        )}
    </div>
}

export default Pager;

