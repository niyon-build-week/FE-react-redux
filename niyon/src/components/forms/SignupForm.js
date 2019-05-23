import React from "react";
import axios from "axios";
import PublicHome from "./PublicHome";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { addProfile } from "../../store/actions";
import "./form.css";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const register = {
      username: this.state.username,
      password: this.state.password
    };

    const endpoint = "https://niyon.herokuapp.com/api/auth/register";
    axios
      .post(endpoint, register)
      .then(res => {
        axios
          .post("https://niyon.herokuapp.com/api/auth/login", this.state)
          .then(res => {
            console.log("LOGIN WIN", res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.id);
            this.props.history.push(`/protected/${res.data.id}`);
          });
      })
      .catch(err => {
        console.error("REGISTER FAIL", err);
      });
  };

  //   handleChange = e => {
  //     this.setState({
  //       account: {
  //         ...this.state.account,
  //         [e.target.name]: e.target.value
  //       }
  //     });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.addProfile(this.state.account).then(() => {
  //       this.props.history.push("/protected");
  //     });
  //   };

  render() {
    return (
      <div className="container">
        <div className="nav" />
        <div className="form-wrap">
          <PublicHome />
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button>Create Account</button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isRegistering: state.isRegistering
// });

// export default connect(
//   mapStateToProps,
//   { addProfile }
// )(Signup);

export default Signup;
