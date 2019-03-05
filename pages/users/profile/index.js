import React from 'react'
import getAxios from 'utils/axios'
import UserProfile from 'components/UserProfile/UserProfile'
import Layout from 'Common/Layout/Layout'

const UserProfilePage = ({ user }) => {
  return <Layout render={() => user && <UserProfile user={user} />} />
}

UserProfilePage.getInitialProps = async ({ query }) => {
  const { userId } = query
  const user = await getAxios().get(`/users/${userId}`)
  return { user: user.data }
}

export default UserProfilePage
