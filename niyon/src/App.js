import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm';
import GetLoginForm from './components/GetLoginForm';
import GiveLoginForm from './components/GiveLoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <div className='nav'>
            <h1 className='head'>niyon</h1>
            <img src='img/lifeguard.jpg' alt='lifeguard stand at a cloudy lake' />
            <div className='cta'>Our experts say it's OK to ask for help.</div>
          </div>
          <ul>
            <li className='link'>
              <Link to='/login'>Get Advice</Link>
            </li>
            <li className='link'>
              <Link to='/login/give'>Give Advice</Link>
            </li>
            <li className='link'>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
          <Route exact path='/login' component={GetLoginForm} />
          <Route exact path='/login/give' component={GiveLoginForm} />
          <Route path='/signup' component={SignupForm} />
        </div>
        <footer className='foot'>
          <i className="fab fa-facebook-square fa-3x"></i>
          <i className="fab fa-linkedin fa-3x"></i>
          <i className="fab fa-twitter-square fa-3x"></i>
          <i className="fab fa-instagram fa-3x"></i>
          <p>Lambda 2019&copy;</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
