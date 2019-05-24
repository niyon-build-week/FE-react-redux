import React from 'react';
// import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Footer from './components/marginals/Footer';
import QForm from './components/gatedContent/QForm';
import PublicHome from './components/forms/PublicHome';
import SignupForm from './components/forms/SignupForm';
import Profile from './components/gatedContent/Profile';
import NewUser from './components/gatedContent/NewUser';
import GetLoginForm from './components/forms/GetLoginForm';
import Questions from './components/gatedContent/Questions';
import GiveLoginForm from './components/forms/GiveLoginForm';
import PrivateHome from './components/gatedContent/PrivateHome';
import UpdateUser from './components/gatedContent/UpdateUserForm';
import PrivateRoute from './components/gatedContent/PrivateRoute';



// axios.defaults.baseURL =
//   process.env.API_URL || "https://niyon.herokuapp.com/api/";

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
          <PrivateRoute exact path='/:id' component={PrivateHome} /> 
          <PrivateRoute path='/ask/:id' render={props => <QForm {...props}/>} component={QForm} />
          <PrivateRoute path='/history/:id' render={props => <Questions {...props} />} component={Questions} />
          <PrivateRoute path='/profile/:id' render={props => <Profile {...props} />} component={Profile} />
          <PrivateRoute path='/update_profile/:id' render={props => <UpdateUser {...props} />} component={UpdateUser} />
          <PrivateRoute path='/new_user/:id' render={props => <NewUser {...props} />} component={NewUser} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
