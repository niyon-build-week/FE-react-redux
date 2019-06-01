import React from 'react';
import axios from 'axios';
import './gatedContent.css';
import PrivateNav from './PrivateNav';

class QForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  question_type: '',
                  title: '',
                  question: '',
                  location: '',
                  date: ''
            }
            console.log(this.props)
      };

      handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
      };

      addQuestion = question => {
            axios
                  .post('https://niyon.herokuapp.com/api/questions/', {
                        question_type: this.state.question_type,
                        question: this.state.question,
                        location: this.state.location,
                        title: this.state.title,
                        date: this.state.date
                  })
                  .then(res => {
                        this.setState({ questions: res.data });
                        this.props.history.push('/history/:id')
                        console.log('add question', res)
                  })
                  .catch(err => console.log('add Q err', err));
      
            this.setState({
                  question_type: '',
                  question: '',
                  location: '',
                  title: '',
                  date: ''
            })
      };

      addQuestion

      render() {
            return (
                  <div className='q-form-wrap'>
                        <PrivateNav />
                        <div className='q-form-card'>
                              <form className='q-form' onSubmit={this.addQuestion}>
                                    <input 
                                          type='text'
                                          name='question'
                                          placeholder='ask me anything'
                                          vaue={this.state.question}
                                          onChange={this.handleChange}
                                    />
                                    <div className='baseline' />
                                    <input 
                                          type='text'
                                          name='question-type'
                                          placeholder='category'
                                          vaue={this.state.question_type}
                                          onChange={this.handleChange}
                                    />
                                    <div className='baseline' />
                                    <input 
                                          type='text'
                                          name='title'
                                          placeholder='title'
                                          vaue={this.state.title}
                                          onChange={this.handleChange}
                                    />
                                    <div className='baseline' />
                                    <input 
                                          type='text'
                                          name='location'
                                          placeholder='whereabouts'
                                          vaue={this.state.location}
                                          onChange={this.handleChange}
                                    />
                                    <div className='baseline' />
                                    <input 
                                          type='text'
                                          name='date'
                                          placeholder='date'
                                          vaue={this.state.date}
                                          onChange={this.handleChange}
                                    />
                                    <div className='baseline' />
                                    <button type='submit'>You're not alone.</button>
                              </form>
                        </div>
                  </div>
            )
      }
}

export default QForm;