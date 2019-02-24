import React from 'react'
import { withRouter } from 'next/router'

const Sarasa = props => {
  const { router } = props
  const {
    query: { pid },
  } = router
  return <div>Welcome to sarasa, {pid}!</div>
}

export default withRouter(Sarasa)
