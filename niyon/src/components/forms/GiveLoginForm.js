import React from "react";
import axios from "axios";
import PublicHome from './PublicHome';
import { Link } from 'react-router-dom';
import './form.css';

class XLogin extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();

    const endpoint = "https://niyon.herokuapp.com/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("LOGIN RESPONSE", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        this.props.history.push(`/protected/${res.data.id}`);
      })
      .catch(error => {
        console.log("LOGIN ERROR", error);
      });
  };

  render() {
    return (
      <div className='form-wrap'>
        <PublicHome />
        <form className='form' onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button> Expert Log in</button>
          <p>
            Want to help? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default XLogin;
