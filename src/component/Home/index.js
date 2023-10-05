import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  HomeBgContainer,
  HeaderContainer,
  Logo,
  CustomButton,
  BottomContainer,
  Heading,
  CardImage,
} from './styledComponents'

class Home extends Component {
  logOutRoute = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <HomeBgContainer>
        <HeaderContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <CustomButton type="button" onClick={this.logOutRoute}>
            Logout
          </CustomButton>
        </HeaderContainer>
        <BottomContainer>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <CardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </BottomContainer>
      </HomeBgContainer>
    )
  }
}

export default Home
