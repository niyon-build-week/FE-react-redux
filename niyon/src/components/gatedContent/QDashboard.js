import React from "react";
import QForm from "./QForm";
// import QHistory from "./QHistory";
import Questions from "./Questions"
import axios from "axios";
import "./gatedContent.css";
import PrivateHome from "./PrivateHome";

export default class UserDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      // loading: true
    };
  }

  //mount profile
  componentDidMount() {
    return axios
      .get(`https://niyon.herokuapp.com/api/profile/`)
      .then(res => {
        console.log("mount win", res.data);
        return this.setState({
          user: res.data.find(
            user => `${user.user_id}` === localStorage.getItem("user_id")
          
          )
        });
      })
      .catch(error => {
        console.log("mount fail", error);
      })
      // .finally(() => {
      //   this.setState({ loading: false });
      // });
  }

  // //delete profile
  // deleteUser = id => {
  //   axios
  //     .delete(`https://niyon.herokuapp.com/api/profile/${id}`)
  //     .then(res => {
  //       console.log("DELETE USER", res.data);
  //       this.setState({ user: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  // deleteProfile = event => {
  //   event.preventDefault();
  //   console.log("DELETE", this.state.user.id);
  //   this.deleteUser(this.state.user.user_id);
  // };


  render() {
    return (
      <div className="user-dashboard">
        <PrivateHome />
        {/* <QHistory /> */}
        {/* <Questions 
          {...props}
          questions={this.state.questions}
        /> */}
      </div>
    );
  }
}
