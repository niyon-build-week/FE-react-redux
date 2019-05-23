import React from 'react';
import help from '../../img/drowning.jpg';
import { NavLink } from 'react-router-dom';

class PublicHome extends React.Component {
      render() {
      return (
            <div className='start'>
                  <div className='nav'>
                        <h1 className='head'>niyon</h1>
                        <div className='cta'>Our experts say it's OK to ask for help.</div>
                        <img src={help} alt='lifeguard stand at a cloudy lake'/>
                  </div>
                  <ul>
                        <li className='link'>
                              <NavLink to='/l'>Get Advice</NavLink>
                        </li>
                        <li className='link'>
                              <NavLink to='/xl'>Give Advice</NavLink>
                        </li>
                        <li className='link'>
                              <NavLink to='/signup'>Sign Up</NavLink>
                        </li>
                  </ul>
            </div>
      )
      }
}

export default PublicHome;