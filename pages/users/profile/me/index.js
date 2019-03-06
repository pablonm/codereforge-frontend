import React from 'react'
import UserProfile from 'components/UserProfile/UserProfile'
import Layout from 'Common/Layout/Layout'

const MePage = () => {
  return <Layout title="My profile" render={user => user && <UserProfile user={user} editable />} />
}

export default MePage
