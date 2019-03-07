import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Card, Button, AuthenticateMessage } from './NewPostWidgetStyles'

export const NewPostWidget = ({ isAuthenticated }) => {
  return (
    <Card size="small" title="New post">
      <p>If you have a piece of code that you think it could be improved, create a new post</p>
      {!isAuthenticated && <AuthenticateMessage>Login to create a new post</AuthenticateMessage>}
      <Link href="/post/new">
        <a>
          <Button type="primary" disabled={!isAuthenticated}>
            Create
          </Button>
        </a>
      </Link>
    </Card>
  )
}

NewPostWidget.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default NewPostWidget
