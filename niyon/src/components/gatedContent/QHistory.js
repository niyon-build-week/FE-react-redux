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
            axios
                  .get(`https://niyon.herokuapp.com/api/questions/`)
                  .then(res => {
                        this.setState({ allQuestions: res.data })
                        console.log('mounting all Qs', this.state)
                  })
                  .catch(err => console.log(err));
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