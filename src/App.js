import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import {useEffect} from 'react';
import {useStateValue} from './StateProvider'
import {auth} from './firebase-config'

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({type: 'SET_USER', user: authUser})
      } else {
        // user is not logged in
        dispatch({type: 'SET_USER', user: null})
      }
    });

    return () => {
      // any cleanup operations goes here
      unsubscribe();
    }
  }, []);

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
