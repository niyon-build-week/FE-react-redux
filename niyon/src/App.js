import React from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Footer from './components/marginals/Footer';
import QForm from './components/gatedContent/QForm';
import PublicHome from './components/forms/PublicHome';
import SignupForm from './components/forms/SignupForm';
import QDash from './components/gatedContent/QDashboard';
import GetLoginForm from './components/forms/GetLoginForm';
import GiveLoginForm from './components/forms/GiveLoginForm';
import PrivateRoute from './components/gatedContent/PrivateRoute';
import QHistory from './components/gatedContent/QHistory';


axios.defaults.baseURL =
  process.env.API_URL || "https://niyon.herokuapp.com/api/";

class App extends React.Component {
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
          <Route exact path='/' component={PublicHome} />
          <Route path='/l' render={props => <GetLoginForm {...props} />} />
          <Route path='/xl' render={props => <GiveLoginForm {...props} />} />
          <Route path='/signup' render={props => <SignupForm {...props} />} />
          <PrivateRoute exact path='/protected/:id' component={QDash} /> 
          <PrivateRoute path='/protected/ask' render={props => <QForm {...props} />} />
          <PrivateRoute path='/protected/:id/history' render={props => <QHistory {...props}/>} />
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
