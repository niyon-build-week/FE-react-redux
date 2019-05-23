import React from 'react';

const Question = props => {
      return (
            <div className='question'>
                  <h2>category: {props.question_type}</h2>
                  <h3>{props.title}</h3>
                  <p>inquiry: {props.question}</p>
                  <p>location: {props.location}</p>
                  <p>date: {props.date}</p>
                  <div className='baseline' />
            </div>
      )
}

Question.defaultProps = {
      question_type: '',
      title: '',
      question: '',
      location: '',
      date: ''
}

export default Question;