import React from 'react';



class NewUser extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  user: {
                        id: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        age: '',
                        primaryLanguage: '',
                        secondaryLanguage: '',
                        areaOfExpertise: '',
                        certs: ''
                  }
            }
      }

      handleChange = e => {
            this.setState({
                  user: {
                    ...this.state.user,
                    [e.target.name]: e.target.value
                  }
                });

      }


      render() {
            return (
                  <div className='form-wrap'>
                        <h2>Create Your Profile</h2>
                        <form className='form'>
                              <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="age"
                                    placeholder="Age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="primaryLang"
                                    placeholder="Primary Language"
                                    value={this.state.primaryLanguage}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="sescondaryLang"
                                    placeholder="Secondary Language"
                                    value={this.state.secondaryLanguage}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="areaOfExpertise"
                                    placeholder="Area Of Expertise"
                                    value={this.state.areaOfExpertise}
                                    onChange={this.handleChange}
                              />
                              <input
                                    type="text"
                                    name="certs"
                                    placeholder="Certifications"
                                    value={this.state.certs}
                                    onChange={this.handleChange}
                              />
                              <button onClick={id => this.addProfile(id)}>Get Advice</button>
                              <button onClick={id => this.addXProfile(id)}>Give Advice</button>
                        </form>

                  </div>
            )
      }
}

export default NewUser;