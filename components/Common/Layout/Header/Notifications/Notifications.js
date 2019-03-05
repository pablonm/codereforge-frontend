import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
import { NotificationsDropdownStyle } from './NotificationsStyles'

const Notifications = ({ notifications }) => {
  const sortedNotifications = () => {
    return notifications.sort((a, b) => {
      const aDate = new Date(a.created_at)
      const bDate = new Date(b.created_at)
      if (aDate.getTime() > bDate.getTime()) return -1
      if (aDate.getTime() < bDate.getTime()) return 1
      return 0
    })
  }

  return (
    <Menu>
      <NotificationsDropdownStyle />
      {sortedNotifications()
        .slice(0, 5)
        .map(notification => (
          <Menu.Item key={notification._id}>
            <Link href={`/post/${notification.postId}`}>
              <a>{notification.message}</a>
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  )
}

export default Notifications
