import React from 'react';

import { NavLink } from 'react-router-dom';

class PrivateHome extends React.Component {

      render() {
            const logout = e => {
                  e.preventDefault();
                  localStorage.removeItem('token');
                  localStorage.removeItem('id');
                  window.location = '/';
            }

      return (
            <div className='private nav-container'>
                  
                        <h1 className='user-head'>niyon</h1>
                        <div className='cta'>Our experts say it's OK to ask for help.</div>
                        <hr />
                        <nav className='nav'>
                              <NavLink to='/protected/ask'>Ask</NavLink>
                              <NavLink to='/protected/history'>History</NavLink>
                              {/* <NavLink to='/protected/profile'>Profile</NavLink> */}
                              <NavLink exact to='/' onClick={logout}>Logout</NavLink>
                        </nav>
                        
                  
                 
            </div>
      )
      }
}

export default PrivateHome;