import React from "react";
import axios from "axios";
import PublicHome from './PublicHome';
import { Link } from 'react-router-dom';
import './form.css';

class Login extends React.Component {
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

    axios
      .post("https://niyon.herokuapp.com/api/auth/login", this.state)
      .then(res => {
        console.log("LOGIN WIN", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        this.props.history.push(`/${res.data.id}`);
      })
      .catch(err => {
        console.log("LOGIN ERR", err);
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
          <button> Log in
       
          </button>
          <p>
            Need help? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;



  

  // login = e => {
  //   e.preventDefault();
  //   export const setToken = store => next => action => {
  //     if (action.type === LOGIN_WIN) {
  //           console.log(action);
  //           localStorage.setItem('userToken', action.payload.token);
  //     }
  //     next(action);
  //   };
  //   this.props.login(this.state.user).then(() => {
  //       this.props.history.push("/protected");
  //     })
  // };

  