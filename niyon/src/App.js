import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Footer from './components/marginals/Footer';
import Start from './components/forms/Start';
import SignupForm from './components/forms/SignupForm';
import GetLoginForm from './components/forms/GetLoginForm';
import GiveLoginForm from './components/forms/GiveLoginForm';
import PrivateRoute from './components/gatedContent/PrivateRoute';
import QDash from './components/gatedContent/QDashboard';
// import XDash from './components/gatedContent/XDashboard';

axios.defaults.baseURL =
  process.env.API_URL || "https://niyon.herokuapp.com/api/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          {/* <div className='nav'>
            <h1 className='head'>niyon</h1>
            <div className='cta'>Our experts say it's OK to ask for help.</div>
            <img src={help} alt='lifeguard stand at a cloudy lake'/>
          </div> */}
          {/* <ul>
            <li className='link'>
              <Link to='/l'>Get Advice</Link>
            </li>
            <li className='link'>
              <Link to='/xl'>Give Advice</Link>
            </li>
            <li className='link'>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul> */}
          <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/l' render={props => <GetLoginForm {...props} />} />
          <Route path='/xl' render={props => <GiveLoginForm {...props} />} />
          <Route path='/signup' render={props => <SignupForm {...props} />} />
          <PrivateRoute exact path='/protected/:id' component={QDash} /> 
          {/* <PrivateRoute path='/protected/expert' component={XDash} />  */}
          {/* <PrivateRoute path='' />
          
          <PrivateRoute path='' />
          <PrivateRoute path='' /> */}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
