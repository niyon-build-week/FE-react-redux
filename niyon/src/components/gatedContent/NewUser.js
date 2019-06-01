import React from "react";
import axios from "axios";
import PrivateNav from "./PrivateNav";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        first_name: "",
        last_name: ""
      }
    };
  }
///needs a post route for adding new users
  createUser = user => {
    console.log(this.state)
    return axios
      .post(`https://niyon.herokuapp.com/api/profile/:id`, user)
      .then(res => {
        console.log("creating", res);
        this.setState({
          user: res.data
        });
        console.log("created user!");
        this.props.history.push("/:id");
      })
      .catch(err => {
        console.log("didn't create user", err);
      });
  };

  handleCreate = e => {
    e.preventDefault();
    this.createUser(this.state.user);
    this.props.history.push("/profile/:id");
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
          <button onClick={this.handleCreate}>Begin</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
