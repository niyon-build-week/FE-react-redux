import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
            // It renders a `<Route />` and passes all the props through to it.
            <Route
                  {...rest}
                  render={props => {
                        // It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login.
                        if (localStorage.getItem('token')) {
                              return <Component {...props} />
                        } else {
                              return <Redirect to='/' />
                        }
                  }}
            />
      );
};

export default PrivateRoute;