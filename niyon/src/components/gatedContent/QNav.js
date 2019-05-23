import React from 'react';
import { NavLink } from 'react-router-dom';
import './gatedContent.css';

function QNav() {
      const logout = e => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            window.location = '/';
      };

      return (
            <div className='nav-container'>
                  <h1 className='user-head'>niyon</h1>
                  <nav className='nav'>
                        <NavLink to='/protected/ask'>Ask</NavLink>
                        <NavLink to='/protected/history'>History</NavLink>
                        <NavLink exact to='/' onClick={logout}>Logout</NavLink>
                  </nav>

            </div>
      )
}

export default QNav;