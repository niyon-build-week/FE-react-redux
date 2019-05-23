import React from 'react';
import axios from 'axios';
import PrivateHome from './PrivateHome';
// import Questions from './Questions';

class QHistory extends React.Component {
      constructor() {
            super();
            this.state = {
                  allQuestions: []
            }
      };

      componentDidMount() {
            const headers = { 
                  headers: {
                        authorization: localStorage.getItem("token")
                  }
            }
            axios
                  .get(`https://niyon.herokuapp.com/api/questions/`, headers)
                  .then(res => {
                        this.setState({ allQuestions: res.data })
                        console.log('mounted q array', this.state)
                  })
                  .catch(err => console.log('mount q array fail', err));
      };

      render() {
            return (
                  <div className='q-history'>
                        <PrivateHome />
                        <h1>testing</h1>
                        {/* <Questions /> */}
                  </div>

            )
      }
}

export default QHistory;