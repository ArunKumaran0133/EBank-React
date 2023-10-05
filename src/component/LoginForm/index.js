import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginFormBgContainer,
  LoginCartContainer,
  LoginImage,
  ImageContainer,
  FormContainer,
  Heading,
  InputContainer,
  Label,
  Input,
  CustomButton,
  InputsContainer,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {userIdInput: '', userPinInput: '', isLoginSuccess: '', errorMsg: ''}

  getUserIdInput = event => {
    this.setState({userIdInput: event.target.value})
  }

  getUserPinInput = event => {
    this.setState({userPinInput: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {userIdInput, userPinInput} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      user_id: userIdInput,
      pin: userPinInput,
    }
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({
        errorMsg: data.error_msg,
        isLoginSuccess: response.ok,
        userIdInput: '',
        userPinInput: '',
      })
    }
  }

  renderIIdInput = () => {
    const {userIdInput} = this.state
    return (
      <InputContainer>
        <Label htmlFor="userIdInput">User ID</Label>
        <Input
          type="text"
          id="userIdInput"
          placeholder="Enter User ID"
          onChange={this.getUserIdInput}
          value={userIdInput}
        />
      </InputContainer>
    )
  }

  renderPinInput = () => {
    const {userPinInput} = this.state
    return (
      <InputContainer>
        <Label htmlFor="userPinInput">PIN</Label>
        <Input
          type="password"
          id="userPinInput"
          placeholder="Enter PIN"
          onChange={this.getUserPinInput}
          value={userPinInput}
        />
      </InputContainer>
    )
  }

  render() {
    const {isLoginSuccess, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormBgContainer>
        <LoginCartContainer>
          <ImageContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </ImageContainer>
          <FormContainer onSubmit={this.onSubmitLoginForm}>
            <InputsContainer>
              <Heading>Welcome Back</Heading>
              {this.renderIIdInput()}
              {this.renderPinInput()}
              <CustomButton type="submit">Login</CustomButton>
              {isLoginSuccess ? '' : <ErrorMsg>{errorMsg}</ErrorMsg>}
            </InputsContainer>
          </FormContainer>
        </LoginCartContainer>
      </LoginFormBgContainer>
    )
  }
}

export default LoginForm
