import React from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Footer from './components/marginals/Footer';
import QForm from './components/gatedContent/QForm';
import PublicHome from './components/forms/PublicHome';
import SignupForm from './components/forms/SignupForm';
import Questions from './components/gatedContent/Questions';
import PrivateHome from './components/gatedContent/PrivateHome';
import GetLoginForm from './components/forms/GetLoginForm';
import GiveLoginForm from './components/forms/GiveLoginForm';
import PrivateRoute from './components/gatedContent/PrivateRoute';



axios.defaults.baseURL =
  process.env.API_URL || "https://niyon.herokuapp.com/api/";

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Switch>
          <Route exact path='/' component={PublicHome} />
          <Route path='/l' render={props => <GetLoginForm {...props} />} />
          <Route path='/xl' render={props => <GiveLoginForm {...props} />} />
          <Route path='/signup' render={props => <SignupForm {...props} />} />
          <PrivateRoute exact path='/protected/:id' component={PrivateHome} /> 
          <PrivateRoute path='/protected/ask' render={props => <QForm {...props}/>} component={QForm} />
          <PrivateRoute path='/protected/history' render={props => <Questions {...props} />} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
