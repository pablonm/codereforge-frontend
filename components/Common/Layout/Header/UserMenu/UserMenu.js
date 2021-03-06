import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserMenuDropdownStyle } from './UserMenuStyles'

const UserMenu = ({ onLogout }) => {
  return (
    <Menu>
      <UserMenuDropdownStyle />
      <Menu.Item key="user-profile-menu-item">
        <Link href="/users/me">
          <a>
            <FontAwesomeIcon icon="user-cog" />
            Profile
          </a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="user-logout-menu-item" onClick={onLogout}>
        <FontAwesomeIcon icon="power-off" />
        Logout
      </Menu.Item>
    </Menu>
  )
}

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
}

export default UserMenu
