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
            <h1 className='head'>Niyon</h1>
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
          <p>Lambda 2019&copy;</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
