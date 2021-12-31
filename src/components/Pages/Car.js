import classes from './Car.module.css';

const Car=props =>{
    return <div className={classes.group}>
    <span className={classes.title}>{props.title}</span>
    <img src={props.img} className={classes.car} alt='a new car'></img>
    <div>
    <span className='price'> <span className={classes.rupee}>&#8377;</span>{props.price}</span><span className={classes.rating}>{props.rating}</span>
    </div>
    </div>;
}


export default Car;