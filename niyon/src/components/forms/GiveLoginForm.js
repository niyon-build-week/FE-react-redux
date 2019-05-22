import React from "react";
import axios from "axios";
import Start from './Start';
// import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import Loader from "react-loader-spinner";
// import { login } from "../../store/actions";
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
        console.error("LOGIN ERROR", error);
      });
  };

  

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

  

  render() {
    return (
      <div className='form-wrap'>
        <Start />
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
          <button> Expert Log in
            {/* {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )} */}
          </button>
          <p>
            Want to help? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isLoggingIn: state.isLoggingIn
// });

// export default connect(
//   mapStateToProps,
//   { login, setToken }
// )(Login);

export default XLogin;

// import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import Loader from "react-loader-spinner";

// import { login } from "../../store/actions";
// import './form.css';

// class ExpertLogin extends React.Component {
//   state = {
//     expertCredentials: {
//       username: "",
//       password: ""
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       expertCredentials: {
//         ...this.state.expertCredentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     this.props.login(this.state.expertCredentials)
//       .then(() => {
//           this.props.history.push("/protected");
//         })
//   };

//   render() {
//     return (
//       <div className='form-wrap'>
//         <form className='form' onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={this.state.expertCredentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value={this.state.expertCredentials.password}
//             onChange={this.handleChange}
//           />
//           <button>
//             {this.props.isLoggingIn ? (
//               <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
//             ) : (
//               "Expert Log in"
//             )}
//           </button>
//           <p>
//             Want to help? <Link to="/signup">Create an Account</Link>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoggingIn: state.isLoggingIn
// });

// export default connect(
//   mapStateToProps,
//   { login }
// )(ExpertLogin);
