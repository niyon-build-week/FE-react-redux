import React from "react";
import axios from 'axios';
import PrivateNav from './PrivateNav';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const headers = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }
    axios
      .get(`https://niyon.herokuapp.com/api/profile`, headers)
      .then(res => {
        console.log('get profile', res.data);
        this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem("user_id")
          )
        });
        console.log('updated profile', this.state);
      })
      .catch(err => {
        console.log("profile fail", err);
      });
  }

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  ////////// update user profile

  updateUser = user => {
    return axios
      .put(`https://niyon.herokuapp.com/api/profile/${user.id}`, user )
      .then(res => {
        console.log('updating', res);
        this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem('user_id')
          )
        })
        console.log('its working!');
        this.props.history.push('/profile/:id');
      })
      .catch(err => {
        console.log('rats', err)
      })
  };

  updateIt = e => {
    e.preventDefault();
    this.updateUser(this.state.user).then(state => {
      this.setState({
        state: ''
      });
      this.props.history.push('/profile/:id')
    })
  };

  ////////// remove user profile 
  deleteUser = id => {
    axios
      .delete(`https://niyon.herokuapp.com/api/profile/${id}`)
      .then(res => {
        console.log("delete", res.data);
        this.setState({ user: res.data });
      })
      .catch(error => console.log(error));
  };

  deleteIt = e => {
    e.preventDefault();
    console.log("delete", this.state.user.id);
    this.deleteUser(this.state.user.user_id);
  };




  render() {
    return (
      <div className="form-wrap">
        <PrivateNav />
        <h2>Be yourself.</h2>
        <form className="form">
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.state.last_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="language"
            placeholder="primary language"
            value={this.state.language}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="areas of expertise"
            value={this.state.skills}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="certs"
            placeholder="certifications"
            value={this.state.certs}
            onChange={this.handleChange}
          />
          <button onClick={this.updateIt}>Update Profile</button>
          <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete your profile?')) this.deleteUser(e) }}>
            Delete Profile
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
