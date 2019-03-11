import React from 'react'
import Link from 'next/link'
import { Avatar } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LeaderboardItem, Score } from './LeaderboardStyles'

const Leaderboard = ({ users }) => {
  const sortByScore = usersArr => {
    return usersArr.sort((a, b) => {
      if (a.score > b.score) return -1
      if (a.score < b.core) return 1
      const aDate = new Date(a.created_at)
      const bDate = new Date(b.created_at)
      if (aDate.getTime() < bDate.getTime()) return -1
      if (aDate.getTime() > bDate.getTime()) return 1
      return 0
    })
  }

  return (
    <div>
      {sortByScore(users).map((user, index) => (
        <Link key={user._id} href={`/users/${user._id}`}>
          <a>
            <LeaderboardItem>
              <div>
                <Avatar shape="square" icon="user" src={user.picture} />
                <h1>{user.name}</h1>
              </div>
              <Score position={index + 1}>
                <span>{user.score}</span>
                <FontAwesomeIcon icon="award" />
              </Score>
            </LeaderboardItem>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Leaderboard
