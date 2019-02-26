import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Badge, Avatar, Dropdown } from 'antd'
import { login, logout } from '../../../utils/auth0'
import { Logo, HeaderContainer, Notifications, UserBar, User, LoginButton } from './HeaderStyles'
import UserMenu from './UserMenu/UserMenu'

const Header = ({ user }) => {
  const loginHandler = () => {
    login()
  }

  const logoutHandler = () => {
    logout()
  }

  return (
    <HeaderContainer>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 22, offset: 1 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 16, offset: 4 }}
      >
        <Row type="flex" justify="space-between">
          <Col xs={24} sm={24} md={4} lg={4} xl={4}>
            <Logo src="/static/img/stackoverflow.png" alt="codereforge logo" />
          </Col>
          {user ? (
            <UserBar xs={24} sm={24} md={4} lg={4} xl={4}>
              <Notifications>
                <Badge status="error" offset={[0, 18]}>
                  <FontAwesomeIcon icon="bell" />
                </Badge>
              </Notifications>
              <Dropdown
                overlay={() => <UserMenu onLogout={logoutHandler} />}
                overlayClassName="user-menu"
                trigger={['click']}
                placement="bottomRight"
              >
                <User>
                  <Avatar icon="user" />
                </User>
              </Dropdown>
            </UserBar>
          ) : (
            <LoginButton onClick={loginHandler}>
              <FontAwesomeIcon icon="user" />
              Login
            </LoginButton>
          )}
        </Row>
      </Col>
    </HeaderContainer>
  )
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
