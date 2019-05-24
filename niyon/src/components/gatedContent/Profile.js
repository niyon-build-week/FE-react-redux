import React from "react";
import axios from "axios";
import PrivateNav from "./PrivateNav";
import { NavLink } from "react-router-dom";

class Profile extends React.Component {
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
    };
    axios
      .get(`https://niyon.herokuapp.com/api/profile`, headers)
      .then(res => {
        console.log("mount win", res.data);
        console.log(this.state);
        this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem("user_id")
          )
        });
      })
      .catch(error => {
        console.log("mount fail", error);
      });
  }

  render() {
    console.log("profile?", this.state);
    return (
      <div className="profile-wrap">
        <PrivateNav />
        <div className="profile-card">
          <p>
            I'm {this.state.user.first_name} {this.state.user.last_name}
          </p>
          <p>Age: {this.state.user.age}</p>
          <p>Gender: {this.state.user.gender}</p>
          <p>Location: {this.state.user.location}</p>
          <p>Language: {this.state.user.language}</p>
          <p>Favorite Ice Cream Flavor: strawberry</p>
          <NavLink to='/update_profile/:id'><button>Update Profile</button></NavLink>
        </div>
      </div>
    );
  }
}

export default Profile;
