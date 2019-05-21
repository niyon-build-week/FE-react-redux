import React from 'react';
import { NavLink } from 'react-router-dom';

function ANav() {
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
                        <Navlink exact to='/' onClick={logout}>Logout</Navlink>
                  </nav>

            </div>
      )
}

export default ANav;