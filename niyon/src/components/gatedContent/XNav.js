import React from 'react';
import { NavLink } from 'react-router-dom';

function XNav() {
      const logout = e => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            window.location = '/';
      };

      return (
            <div className='nav-container'>
                  <h1>niyon</h1>
                  <nav className='nav'>
                        <NavLink to='/expert profile id'>Profile</NavLink>
                        <NavLink to='/a history'>History</NavLink>
                        <NavLink exact to='/' onClick={logout}>Logout</NavLink>
                  </nav>

            </div>
      )
}

export default XNav;