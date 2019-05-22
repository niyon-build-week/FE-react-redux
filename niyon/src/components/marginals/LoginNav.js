import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';
import GetLoginForm from '../forms/GetLoginForm';
import GiveLoginForm from '../forms/GiveLoginForm';


function LoginNav() {
      return(
            <div className='login-nav'>
                  <ul>
                        <li className='link'>
                              <Link to='/'>Get Advice</Link>
                        </li>
                        <li className='link'>
                              <Link to='/xlogin'>Give Advice</Link>
                        </li>
                        <li className='link'>
                              <Link to='/signup'>Sign Up</Link>
                        </li>
                  </ul>
                  <Route exact path='/' render={props => <GetLoginForm {...props} />} />
                  <Route path='/xlogin' render={props => <GiveLoginForm {...props} />} />
                  <Route path='/signup' render={props => <SignupForm {...props} />} />
            </div>
      )
}

export default LoginNav;