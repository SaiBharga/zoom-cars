import React,{ useReducer } from "react";
import Datsun_Redi_Go from "../../images/Datsun Redi-Go.png"
import Ford_Aspire_Diesel from "../../images/Ford Aspire Diesel.png"
import Ford_Ecosport_Titanium from "../../images/Ford Ecosport Titanium.JPG"
import Honda_Mobilo from "../../images/Honda Mobilo.png"
import Maruti_Baleno_Diesel from "../../images/Maruti Baleno Diesel.png"
import Maruti_Dzire from "../../images/Maruti Dzire.png"
import Maruti_Ertiga_Hybrid from "../../images/Maruti Ertiga Hybrid.png"
import Maruti_S_Cross from "../../images/Maruti S-Cross.jpg"
import Maruti_Wagon_R from "../../images/Maruti Wagon R.png"
import Renault_Kiwid from "../../images/Renault Kiwid.png"
import Renault_Triber from "../../images/Renault Triber.png"
import Tata_Tigor from "../../images/Tata Tigor.png"

const CARS_DATA=[{
  img:String(Datsun_Redi_Go), title:'Datsun Redi-Go',price:600,rating:9,id:1,seats:4
},{
  img:String(Ford_Aspire_Diesel), title:'Ford Aspire Diesel',price:1000,rating:8,id:2,seats:5
},{
  img:String(Ford_Ecosport_Titanium), title:'Ford Ecosport Titanium',price:700,rating:7,id:3,seats:4
},{
  img:String(Honda_Mobilo), title:'Honda Mobilo',price:900,rating:6,id:4,seats:6
},{
  img:String(Maruti_Baleno_Diesel), title:'Maruti Baleno Diesel',price:800,rating:5,id:5,seats:6
},{
  img:String(Maruti_Dzire), title:'Maruti Dzire',price:1100,rating:10,id:6,seats:5
},{
  img:String(Maruti_Ertiga_Hybrid), title:'Maruti Ertiga Hybrid',price:1200,rating:8,id:7,seats:5
},{
  img:String(Maruti_S_Cross), title:'Maruti S Cross',price:1500,rating:9,id:8,seats:4
},{
  img:String(Maruti_Wagon_R), title:'Maruti Wagon R',price:600,rating:8,id:9,seats:6
},{
  img:String(Renault_Kiwid), title:'Renault Kiwid',price:800,rating:10,id:10,seats:5
},{
  img:String(Renault_Triber), title:'Renault Triber',price:920,rating:9,id:11,seats:6
},{
  img:String(Tata_Tigor), title:'Tata Tigor',price:1400,rating:10,id:12,seats:6
}
]

const getFilteredCars=(filter)=>{
 
  return (filter.seats!==0?CARS_DATA.filter(car=> car.seats === filter.seats
      ):CARS_DATA).filter(car=> car.price >= filter.min && car.price <= filter.max)
    .sort((a,b)=> a[filter.sortOn]>b[filter.sortOn]?1:-1)
 }

const FilterContext = React.createContext({
    cars:CARS_DATA,
    sortOn:'title',
    seats:0,
    min:450,
    max:1550,
    page:1,
    itemsperpage:2,
    filterChange:(obj)=>{},
    minPriceChange:(min)=>{},
    maxPriceChange:(max)=>{},
    seatsChange:(seats)=>{},
    sortOnChange:(sortOn)=>{},
    pageChange:(pageNo)=>{},
    itemsPerPageChange:(count)=>{}
});

const defCxt={
    cars:CARS_DATA,
    sortOn:'title',
    seats:0,
    min:450,
    max:1550,
    page:1,
    itemsperpage:2
}

const filterReducer=(state,action)=>{
   if(action.type==='all'){
     const curCxt={ ...action.change}
     curCxt.cars=getFilteredCars(curCxt)
     return curCxt;
   }
   if(action.type==='min'){
     const curCxt={ ...state, min: action.change,max:action.change>state.max?1550:state.max,page:1}
     curCxt.cars=getFilteredCars(curCxt)
     return curCxt;
   }

   if(action.type==='max'){
      const curCxt={  ...state, max:action.change,page:1}
      curCxt.cars=getFilteredCars(curCxt);
      return curCxt;
   }

   if(action.type==='seats'){
     const curCxt={ ...state, seats:action.change,page:1}
     curCxt.cars=getFilteredCars(curCxt);
     curCxt.itemsperpage=curCxt.itemsperpage<curCxt.cars.length?curCxt.itemsperpage:curCxt.cars.length
     return curCxt;
   }

   if(action.type==='sortOn'){
     const curCxt={ ...state,sortOn:action.change }
     curCxt.cars=getFilteredCars(curCxt);
     return curCxt;
   }

   if(action.type==='page'){
     const curCxt= { ...state, page:action.change}
     curCxt.cars=getFilteredCars(curCxt);
     return curCxt;
   }
  
   if(action.type==='count'){
     const curCxt={ ...state, itemsperpage:action.change,page:1};
     curCxt.cars=getFilteredCars(curCxt);
     return curCxt;
   }
    return defCxt;
}

export const FilterContextProvider=props=>{
    
    const [currentContext,dispatchFilterContext]= useReducer(filterReducer,defCxt);
    
    const filterChangeHandler=(obj)=>{
      dispatchFilterContext({type:'all',change:{ ...obj}});
    }

    const minPriceChangeHandler=(min)=>{
      dispatchFilterContext({ type:'min',change:min })
    }

    const maxPriceChangeHandler=(max)=>{
      dispatchFilterContext({ type:'max',change:max });
    }

    const seatsChangeHandler=(seats)=>{
      dispatchFilterContext({ type:'seats',change:seats })
    }

    const sortOnChangeHandler=(sortOn)=>{
      dispatchFilterContext({ type:'sortOn',change:sortOn })
    }

    const pageChangeHandler=(pageNo)=>{
      dispatchFilterContext({ type:'page',change:pageNo });
    }

    const itemsPerPageChangeHandler=(count)=>{
      dispatchFilterContext({ type:'count',change:count });
    }

    const cxt={
        cars:currentContext.cars,
        sortOn:currentContext.sortOn,
        seats:currentContext.seats,
        min:currentContext.min,
        max:currentContext.max,
        page:currentContext.page,   
        itemsperpage:currentContext.itemsperpage,         
        filterChange:filterChangeHandler,
        minPriceChange: minPriceChangeHandler,
        maxPriceChange:maxPriceChangeHandler,
        seatsChange:seatsChangeHandler,
        sortOnChange:sortOnChangeHandler,
        pageChange:pageChangeHandler,
        itemsPerPageChange:itemsPerPageChangeHandler
    }

    return (
        <FilterContext.Provider value={cxt}>
            {props.children}
        </FilterContext.Provider>
    );

}

export default FilterContext;
