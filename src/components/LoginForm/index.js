// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', pass: '', isTrue: false, values: ''}

  readUserName = e => {
    this.setState({userName: e.target.value})
  }

  readPassword = e => {
    this.setState({pass: e.target.value})
  }

  submitForm = e => {
    e.preventDefault()
    const {userName, pass} = this.state
    const object = {
      username: userName,
      password: pass,
    }
    this.getResponse(object)
  }

  getResponse = async object => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(object),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        values: data.error_msg,
        isTrue: true,
      })
    }
  }

  render() {
    const {userName, pass, isTrue, values} = this.state
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
            value={userName}
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
            value={pass}
          />
          <button type="submit" className="submit-button">
            Login
          </button>
          {isTrue && <p className="error-para">{values}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
