import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";

import { login } from "../store/actions";
import './form.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => {
        //should redirect them back to wherever they were trying to go. doesn't matter in this app, but good practice
        this.props.location.state.from || '/';
        this.props.history.push("/protected");
      })
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="........"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
          <p>
            Need help? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);