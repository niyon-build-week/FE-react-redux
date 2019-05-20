import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav'>
          <h1>Niyon</h1>
          <div>lorem niyon ladida</div>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignUpForm} />
        </div>
        
        
        
      </div>
    </Router>
  );
}

export default App;
