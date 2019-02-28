import React, { Fragment } from 'react'
import Header from '../Header/Header'
import withUser from '../../HOC/withUser'

const Layout = ({ user, render }) => {
  return (
    <Fragment>
      <Header user={user} />
      {render(user)}
    </Fragment>
  )
}

export default withUser(Layout)
