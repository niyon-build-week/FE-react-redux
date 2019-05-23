import React from "react";
import axios from 'axios';

class UpdateUser extends React.Component {
  constructor() {
    super();
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
        console.log('profile update', res.data);
        console.log(this.state);
        this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem("user_id")
          )
        });
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

  render() {
    return (
      <div className="form-wrap">
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
          <button>Update Profile</button>
          <button>Delete Profile</button>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
