import { Fragment } from "react";
import { useContext} from "react";
import Car from "./Car";
import Header from "../UI/Header";
import Filters from "./Filters";
import classes from './Cars.module.css';

import FilterContext from "../Context/filter-context";
import Pager from "./Pager";

function Cars(props) {

  const context=useContext(FilterContext);
  let carsPerPage=context.itemsperpage;
  let carsCount = context.cars.length;
  let pagesCount=Math.ceil(carsCount/carsPerPage)

  return <Fragment>
    <Header></Header>
    <Filters></Filters>
    <div className={classes.cars}>
    { context.cars.length>0 && context.cars.map((car,index)=> context.page===Math.ceil((index+1)/carsPerPage) &&
      <Car key={car.id} img={car.img} title={car.title} price={car.price} rating={car.rating} />
    )}

      {context.cars.length===0 && <h4> No Cars Present </h4> }

    </div>
    <Pager count={pagesCount}></Pager>
  </Fragment>;
}

export default Cars;
