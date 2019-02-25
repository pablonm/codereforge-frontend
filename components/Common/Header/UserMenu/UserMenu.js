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
        <Link href="/me">
          <div>
            <FontAwesomeIcon icon="user-cog" />
            Profile
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="user-posts-menu-item">
        <Link href="/me/posts">
          <div>
            <FontAwesomeIcon icon="marker" />
            Posts
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="user-refactorings-menu-item">
        <Link href="/me/refactorings">
          <div>
            <FontAwesomeIcon icon="code" />
            Refactorings
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="user-favorites-menu-item">
        <Link href="/me/favorites">
          <div>
            <FontAwesomeIcon icon="star" />
            Favorites
          </div>
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
