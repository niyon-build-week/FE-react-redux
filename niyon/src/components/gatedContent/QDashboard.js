import React from "react";
import QNav from "./QNav";
import QHistory from './QHistory';
import QForm from './QForm';
// import Questions from "./Questions"
import axios from 'axios';
import './gatedContent.css';

export default class UserDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],    
      user: {},
      // loading: true
    };
  }

  componentDidMount() {
    return axios
      .get("https://niyon.herokuapp.com/api/profile/:id")
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

  render(){
        return(
            <div className='user-dashboard'>
                  <QNav />
                  <QForm />
                  {/* <QHistory /> */}
                  {/* <Questions 
                        {...props}
                        questions={this.state.questions}
                  /> */}

            </div>
        )
  }
}
