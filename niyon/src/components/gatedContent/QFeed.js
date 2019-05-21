import React from 'react';
import { connect } from 'react-redux';
import { fetchQ, addQuestion, updateQuestion, removeQuestion } from '../../store/actions';

class QFeed extends React.Component {
      state = {
            questions: []
      }

      componentDidMount() {
            console.log('mounted in qfeed', this.props)
            this.props.fetchQ()
      }

      render() {
            return (
                  <div className='question-wrap'>
                        <h2>Inquiries</h2>
                        <div className='q-feed'>
                              {this.props.questions.map(question => (
                                    <div className='q-card' key={question.id}>
                                          <p>{question.value}</p>
                                    </div>
                              ))}
                        </div>

                  </div>
            )
      }
}

const mapStateToProps = state => {
      return {
            questions: state.questions
      }
}

export default connect(
      mapStateToProps,
      { fetchQ, addQuestion, updateQuestion, removeQuestion }
)(QFeed);