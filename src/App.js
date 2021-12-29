import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Home from './components/Pages/Home';
import Cars from './components/Pages/Cars';
import { BrowserRouter as Router , Route, Switch ,Redirect} from 'react-router-dom';
import { FilterContextProvider } from './components/Context/filter-context';

function App() {
  return (
    <FilterContextProvider>
        <Router>
          <Switch>
            <Route path='/' exact>

              <Redirect to='/home'>
                <Home />
              </Redirect>

            </Route>
            <Route path='/home' exact>

              <Home />

            </Route>

            <Route path='/cars'>
              <Cars />
            </Route>
          </Switch>
        </Router>
      </FilterContextProvider>
    )
}


export default App;