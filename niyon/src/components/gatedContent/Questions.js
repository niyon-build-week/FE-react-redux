import React from 'react';
import axios from 'axios';
import PrivateNav from './PrivateNav';


class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: []
    };
    console.log(this)
  }

  componentDidMount() {
    // const headers = {
    //       headers: {
    //             authorization: localStorage.getItem("token")
    //       }
    // }
    axios
      .get(`https://niyon.herokuapp.com/api/questions/:id`)
      .then(res => {
        console.log('mounting q list', res.data);
        this.setState({
          questions: res.data
          
        });
        console.log('q list state', this.state);
      })
      .catch(err => {
        console.log("q list mount fail", err);
      });
  }  
    render() {
      return (
        <div className='my-qs'>
          <PrivateNav />
          <h1> My Advice </h1>
          <hr />
          <p>list of my questions</p>
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