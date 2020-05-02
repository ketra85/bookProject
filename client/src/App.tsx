import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
