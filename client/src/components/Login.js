import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

   loginRequest = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/protected');
    })
    .catch(err => console.log(err.response));
  };

  render() {
    if (localStorage.getItem('token')) {
      return <Redirect to='protected' />
    }
    return (
      <div>
        <form onSubmit={this.login}>
          <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChane={this.handleChange}
          placeholder='Username'
          />
          <input
          type='text'
          name='password'
          value={this.state.credentials.password}
          onChane={this.handleChange}
          placeholder='Password'
          />
        </form>
        <button>Log in</button>
      </div>
    )
  }

  
};

export default Login;
