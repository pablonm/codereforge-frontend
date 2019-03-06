import React from 'react'
import getAxios from 'utils/axios'
import Layout from 'Common/Layout/Layout'
import Leaderboard from 'components/Leaderboard/Leaderboard'

const LeaderboardPage = ({ users }) => {
  return (
    <Layout
      title="Users leaderboard"
      description="These are the users with the highest score in the platform"
      render={() => <Leaderboard users={users} />}
    />
  )
}

LeaderboardPage.getInitialProps = async () => {
  const users = await getAxios().get('/users')
  return { users: users.data }
}

export default LeaderboardPage
