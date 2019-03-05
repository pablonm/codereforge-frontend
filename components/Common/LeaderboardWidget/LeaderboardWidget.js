import React from 'react'
import Link from 'next/link'
import { Card, Button } from './LeaderboardWidgetStyles'

export const LeaderboardWidget = () => {
  return (
    <Card size="small" title="Leaderboard">
      <p>Writing refactorings and receiving votes gets you up in the leaderboard</p>
      <Link href="/users/leaderboard">
        <a>
          <Button type="primary">Check the leaderboard</Button>
        </a>
      </Link>
    </Card>
  )
}

export default LeaderboardWidget
