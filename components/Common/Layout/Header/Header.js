import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Row, Col, Badge, Avatar, Dropdown } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAxios from 'utils/axios'
import { login, logout } from 'utils/auth0'
import {
  Logo,
  HeaderContainer,
  NotificationsIcon,
  UserBar,
  User,
  LoginButton,
  Slogan,
} from './HeaderStyles'
import UserMenu from './UserMenu/UserMenu'
import Notifications from './Notifications/Notifications'

class Header extends Component {
  state = {
    notificationsReaded: false,
  }

  loginHandler = () => {
    login()
  }

  logoutHandler = () => {
    logout()
  }

  readNotifications = async () => {
    const { user } = this.props
    const { notificationsReaded } = this.state
    this.setState({ notificationsReaded: true })
    if (!notificationsReaded && user.unreadNotifications)
      await getAxios().put('/users/notifications')
  }

  render() {
    const { user } = this.props
    const { notificationsReaded } = this.state
    return (
      <HeaderContainer>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 1 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
          xl={{ span: 18, offset: 3 }}
        >
          <Row type="flex">
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <Link href="/">
                <a>
                  <Logo src="/static/img/logo.png" alt="codereforge logo" />
                </a>
              </Link>
            </Col>
            <Slogan xs={24} sm={24} md={16} lg={16} xl={16}>
              <span>The code refactoring platform</span>
            </Slogan>
            {user ? (
              <UserBar xs={24} sm={24} md={4} lg={4} xl={4}>
                <Dropdown
                  overlay={() => <Notifications notifications={user.notifications} />}
                  overlayClassName="notifications"
                  onVisibleChange={this.readNotifications}
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <NotificationsIcon>
                    <Badge offset={[0, 18]} dot={!notificationsReaded && user.unreadNotifications}>
                      <FontAwesomeIcon icon="bell" />
                    </Badge>
                  </NotificationsIcon>
                </Dropdown>
                <Dropdown
                  overlay={() => <UserMenu onLogout={this.logoutHandler} />}
                  overlayClassName="user-menu"
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <User>
                    <Avatar shape="square" icon="user" src={user.picture} />
                  </User>
                </Dropdown>
              </UserBar>
            ) : (
              <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{ textAlign: 'right' }}>
                <LoginButton onClick={this.loginHandler}>
                  <FontAwesomeIcon icon="user" />
                  Login
                </LoginButton>
              </Col>
            )}
          </Row>
        </Col>
      </HeaderContainer>
    )
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
  }),
}

Header.defaultProps = {
  user: null,
}

export default Header
