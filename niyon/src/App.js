import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import help from './img/lifeguard.jpg';
import SignupForm from './components/forms/SignupForm';
import GetLoginForm from './components/forms/GetLoginForm';
import GiveLoginForm from './components/forms/GiveLoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <div className='nav'>
            <h1 className='head'>niyon</h1>
            <div className='cta'>Our experts say it's OK to ask for help.</div>
            <img src={help} alt='lifeguard stand at a cloudy lake'/>
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
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-2x"></i></a>
          <a href="http://www.linkedin.com"><i className="fab fa-linkedin fa-2x"></i></a>
          <a href="http://www.twitter.com"><i className="fab fa-twitter-square fa-2x"></i></a>
          <a href="http://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
          <p className='copy'>2019&copy; - Lambda Niyon - All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
