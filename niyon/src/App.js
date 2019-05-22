import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import help from './img/drowning.jpg';
import Footer from './components/marginals/Footer';
import SignupForm from './components/forms/SignupForm';
import GetLoginForm from './components/forms/GetLoginForm';
import GiveLoginForm from './components/forms/GiveLoginForm';
import PrivateRoute from './components/gatedContent/PrivateRoute';
import QDash from './components/gatedContent/QDashboard';
import AskQ from './components/gatedContent/AskQ';

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
              <Link to='/'>Get Advice</Link>
            </li>
            <li className='link'>
              <Link to='/xlogin'>Give Advice</Link>
            </li>
            <li className='link'>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
          <Switch>
          <Route exact path='/' render={props => <GetLoginForm {...props} />} />
          <Route path='/xlogin' render={props => <GiveLoginForm {...props} />} />
          <Route path='/signup' render={props => <SignupForm {...props} />} />
          <Route path='/ask' component={QDash} /> {/* change to private route */}
          <Route path='/ask/new' component={AskQ} /> {/* change to private route*/}
          {/* <PrivateRoute path='' />
          
          <PrivateRoute path='' />
          <PrivateRoute path='' /> */}
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
