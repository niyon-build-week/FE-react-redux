import React from 'react';
import Question from './Question';


class Questions extends React.Component {
  render() {
    return(
      <div className='questions'>
        <h1>My Inquiries</h1>
        <div className='baseline' />
        <ul>
          {this.props.allQuestions.map(question => {
            console.log('questions', this.props);
            return (
              <Question 
                id={question.id}
                date={question.date}
                title={question.title}
                question={question.question}
                question_type={question.question_type}
                location={question.location}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

Question.defaultProps = {
  allQuestions: [],
}

export default Questions;