import React from 'react';
import help from '../../img/undraw_different_love_a3rg.svg';
import { NavLink } from 'react-router-dom';

class PublicHome extends React.Component {
      render() {
      return (
            <div className='start'>
                  <div className='nav'>
                        <h1 className='head'>Niyon</h1>
                        <div className='cta'>Get and Give Advice.</div>
                        <hr />
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