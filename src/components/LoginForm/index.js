// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isTrue: false, msg: ''}

  readUserName = event => {
    this.setState({username: event.target.value})
  }

  readPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    this.getResponse(userDetails)
  }

  getResponse = async object => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(object),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const {history} = this.props
    if (response.ok === true) {
      history.replace('/')
    } else {
      this.setState({
        msg: data.error_msg,
        isTrue: true,
      })
    }
  }

  render() {
    const {username, password, isTrue, msg} = this.state
    return (
      <div className="login-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo1"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-page"
          alt="website login"
        />
        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo2"
            alt="website logo"
          />
          <label className="label" htmlFor="input1">
            USERNAME
          </label>
          <input
            type="text"
            className="username"
            id="input1"
            placeholder="Username"
            onChange={this.readUserName}
            value={username}
          />
          <label className="label" htmlFor="input2">
            PASSWORD
          </label>
          <input
            type="password"
            className="username"
            id="input2"
            placeholder="Password"
            onChange={this.readPassword}
            value={password}
          />
          <button type="submit" className="submit-button">
            Login
          </button>
          {isTrue && <p className="error-para">{msg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
