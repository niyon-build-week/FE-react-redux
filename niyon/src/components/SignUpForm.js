import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';

class SignupForm extends React.Component {
      state = {
            account: {
                  username: '',
                  password: '',
            
            }
      }

      handleChange = e => {
            this.setState({
                  account: {
                    ...this.state.account,
                    [e.target.name]: e.target.value
                  }
                });
      }

      handleSubmit = e => {

      }

      render() {
            return (
                  <div className='container'>
                        <div className='nav'>
                        </div>
                        <div className='form-wrap'>
                              <form className='form' onSubmit={this.handleSubmit}>
                                    <input
                                          type='text'
                                          name='username'
                                          placeholder='username'
                                          value={this.state.username}
                                          onChange={this.handleChange}
                                    />
                                    <input
                                          type='password'
                                          name='password'
                                          placeholder='password'
                                          value={this.state.password}
                                          onChange={this.handleChange}
                                    />
                                    <button>Create Account</button>
                                    <p>
                                          Already have an account? <Link to="/">Login</Link>
                                    </p>
                              </form>
                        </div>
                  </div>
            )
      }
}

export default SignupForm;