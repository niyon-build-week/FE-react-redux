import React from "react";
import axios from "axios";
import "./gatedContent.css";
import { NavLink } from "react-router-dom";
// import profile from '../../img/undraw_step_to_the_sun_nxqq.png'

class PrivateNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
      // loading: true
    };
  }

  //mount profile
  componentDidMount() {
    const headers = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(
        `https://niyon.herokuapp.com/api/profile`,
        headers
      )
      .then(res => {
        console.log("mount win", res.data);
        console.log(this.state)
        this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem("user_id")
          )
        });
        
      })
      .catch(error => {
        console.log("mount fail", error);
      });
    // .finally(() => {
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const logout = e => {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      window.location = "/";
    };
    console.log('state', this.state)
    return (
      <div className="private nav-container">
        <div>
          <h1 className="user-head">Niyon</h1>
          <div className="cta">Our experts say it's OK to ask for help.</div>
          <hr />
          

          <ul className="nav">
            <li className="link">
              <NavLink to="/ask/:id">Ask</NavLink>
            </li>
            <li className="link">
              <NavLink to="/history/:id">History</NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/profile/:id">
                Profile
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/" onClick={logout}>
                Logout
              </NavLink>
            </li>
            
            
            
          </ul>
          {/* <img src={profile} alt='lifeguard stand at a cloudy lake'/> */}
          
        </div>
      </div>
    );

    // return (
    //       <div className='private nav-container'>

    //                   <h1 className='user-head'>niyon</h1>
    //                   <div className='cta'>Our experts say it's OK to ask for help.</div>
    //                   <hr />
    //                   <nav className='nav'>
    //                         <NavLink to='/protected/ask'>Ask</NavLink>
    //                         <NavLink to='/protected/history'>History</NavLink>
    //                         {/* <NavLink to='/protected/profile'>Profile</NavLink> */}
    //                         <NavLink exact to='/' onClick={logout}>Logout</NavLink>
    //                   </nav>

    //       </div>
    // )
  }
}

export default PrivateNav;
