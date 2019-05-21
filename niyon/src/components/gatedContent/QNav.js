import React from 'react';
import { NavLink } from 'react-router-dom';

function QNav() {
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
                        <NavLink to='/new q'>Ask</NavLink>
                        <NavLink to='/q history'>History</NavLink>
                        <Navlink exact to='/' onClick={logout}>Logout</Navlink>
                  </nav>

            </div>
      )
}

export default QNav;