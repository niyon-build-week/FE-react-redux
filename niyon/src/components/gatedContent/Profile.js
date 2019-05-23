import React from 'react';
import axios from 'axios';
import PrivateHome from './PrivateHome';
import NewUser from './NewUser';


class Profile extends React.Component {
      constructor(props){
            super(props);
            this.state = {
                  user: {}

            }
      }

      componentDidMount() {
            const headers = {
              headers: {
                authorization: localStorage.getItem("token")
              }
            };
            axios
              .get(
                `https://niyon.herokuapp.com/api/profile`,
                headers
              )
              .then(res => {
                console.log("mount win", res.data);
                console.log(this.state)
                this.setState({
                  user: res.data.find(
                    user => `${user.user_id}` === localStorage.getItem("user_id")
                  )
                });
                
              })
              .catch(error => {
                console.log("mount fail", error);
              });
            // .finally(() => {
            //   this.setState({ loading: false });
            // });
          }

      handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
      };

      render() {
            console.log('profile?', this.state)
            return(
            
                  <div className='profile-container'>
                        <PrivateHome />
                        <div className='profile-card'>
                              <p>I'm {this.state.user.first_name} {this.state.user.last_name}</p>
                              <p>Age: {this.state.user.age}</p>
                              <p>Gender: {this.state.user.gender}</p>
                              <p>Location: {this.state.user.location}</p>
                              <p>Language: {this.state.user.language}</p>
                              <button>Edit Profile</button>
                        </div>

                  </div>
            )
      }
}


export default Profile;