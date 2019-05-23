import React from 'react';
import axios from 'axios';
import PrivateNav from './PrivateNav';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      questions: [],
      filter: {}
    };
    console.log(this)
  }

  componentDidMount() {
    const headers = { 
      headers: {
            authorization: localStorage.getItem("token")
      }
    }
    axios
      .get(`https://niyon.herokuapp.com/api/questions/`, headers)
      .then(res => {
        console.log('q mount', res.data);
        this.setState({
          allQuestions: res.data
        })
      .catch(err => console.log('q mount error', err))
      })
  };
  

  render() {
    return (
      <div className='my-qs'>
        <PrivateNav />
        <h1>MY QUESTION THREAD</h1>
        <p>.map list of my questions</p>
      </div>
    )
  }

//   render() {
//     return(
//       <div className='questions'>
//         <h1>My Inquiries</h1>
//         <div className='baseline' />
//         <ul>
//           {this.props.allQuestions.map(question => {
//             console.log('questions', this.props);
//             return (
//               <Question 
//                 id={question.id}
//                 date={question.date}
//                 title={question.title}
//                 question={question.question}
//                 question_type={question.question_type}
//                 location={question.location}
//               />
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// Question.defaultProps = {
//   allQuestions: [],
// }
}
export default Questions