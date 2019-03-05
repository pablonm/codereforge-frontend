import React from 'react'
import UserProfile from '../../../../components/UserProfile/UserProfile'
import Layout from '../../../../components/Common/Layout/Layout'

const MePage = () => {
  return <Layout render={user => user && <UserProfile user={user} editable />} />
}

export default MePage