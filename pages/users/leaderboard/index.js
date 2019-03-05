import React from 'react'
import getAxios from '../../../utils/axios'
import Layout from '../../../components/Common/Layout/Layout'
import Leaderboard from '../../../components/Leaderboard/Leaderboard'

const LeaderboardPage = ({ users }) => {
  return <Layout render={() => <Leaderboard users={users} />} />
}

LeaderboardPage.getInitialProps = async () => {
  const users = await getAxios().get('/users')
  return { users: users.data }
}

export default LeaderboardPage
