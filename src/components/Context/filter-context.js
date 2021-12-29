import React,{ useReducer } from "react";
import blue from '../../images/blue.jpg';
import brown from '../../images/brown.JPG';
import Maroon from '../../images/Maroon.png';
import black from '../../images/black.png';
import thick_blue from '../../images/thick_blue.png';
import red from '../../images/red.png';
import royal_blue from '../../images/royal_blue.png';
import ocean_blue from '../../images/ocean_blue.png';
import grey from '../../images/grey.png';
import white from '../../images/white.png';
import squash from '../../images/squash.png';
import rose_red from '../../images/rose_red.png';

const CARS_DATA=[{
  img:String(blue), title:'blue',price:600,rating:9,id:1,seats:4
},{
  img:String(brown), title:'brown',price:1000,rating:8,id:2,seats:5
},{
  img:String(Maroon), title:'maroon',price:700,rating:7,id:3,seats:4
},{
  img:String(black), title:'black',price:900,rating:6,id:4,seats:6
},{
  img:String(thick_blue), title:'thick_blue',price:800,rating:5,id:5,seats:6
},{
  img:String(red), title:'red',price:2000,rating:10,id:6,seats:5
},{
  img:String(royal_blue), title:'royal_blue',price:1200,rating:8,id:7,seats:5
},{
  img:String(ocean_blue), title:'ocean_blue',price:1500,rating:9,id:8,seats:4
},{
  img:String(grey), title:'grey',price:600,rating:8,id:9,seats:6
},{
  img:String(white), title:'white',price:800,rating:10,id:10,seats:5
},{
  img:String(squash), title:'squash',price:920,rating:9,id:11,seats:6
},{
  img:String(rose_red), title:'rose-red',price:2500,rating:10,id:12,seats:6
}
]

const getFilteredCars=(filter)=>{
    return (filter.seats!==0?CARS_DATA.filter(car=> car.seats === filter.seats):CARS_DATA)
    .sort((a,b)=> a[filter.sortOn]>b[filter.sortOn]?1:-1)
 }

const FilterContext = React.createContext({
    cars:CARS_DATA,
    sortChange:(sortOn)=>{},
    seatsChange:(seats)=>{}
});

const defCxt={
    cars:CARS_DATA
}

const filterReducer=(state,action)=>{
    if(action.type=='dropdown'){
       const curCxt={ ...state,sortOn:action.change}
       curCxt.cars=getFilteredCars(curCxt);
       return curCxt;
    }
    if(action.type=='seats'){
        const curCxt={ ...state,seats:action.change}
        curCxt.cars=getFilteredCars(curCxt);
        return curCxt;
   }
    return defCxt;
}

export const FilterContextProvider=props=>{
    
    const [currentContext,dispatchFilterContext]= useReducer(filterReducer,defCxt);
    
    const dropDownChangeHandler=sortOn=>{
        dispatchFilterContext({ type:'dropdown', change:sortOn });
    }

    const seaterChangeHandler=seats=>{
        dispatchFilterContext({ type:'seats',change:seats });
    }

    const cxt={
        cars:currentContext.cars,
        sortChange:dropDownChangeHandler,
        seatsChange:seaterChangeHandler
    }

    return (
        <FilterContext.Provider value={cxt}>
            {props.children}
        </FilterContext.Provider>
    );

}

export default FilterContext;
