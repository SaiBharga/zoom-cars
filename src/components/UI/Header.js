import classes from './Header.module.css';
import { useHistory } from 'react-router-dom';

const Header = props =>{
    const history=useHistory();
    function navigateToHomeHandler(event){
      history.push('/home');
    }

    function navigateToCarsHandler(event) {
        history.push('/cars');
    }

return <header className={classes.header}>
     <nav>
        <ul>
          <li>
            <button onClick={navigateToHomeHandler}>Home</button>
          </li>
          <li>
            <button onClick={navigateToCarsHandler}>Cars</button>
          </li>
        </ul>
      </nav>
  </header>;
}   

export default Header;

