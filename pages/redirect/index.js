import React, { Component } from 'react'
import axios from 'axios'
import { parseHash } from '../../utils/auth0'

class Redirect extends Component {
  componentDidMount() {
    try {
      parseHash(async (err, result) => {
        if (err) {
          localStorage.setItem('authError', true)
          this.redirect('/')
          return
        }
        const { idToken, accessToken } = result
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('accessToken', accessToken)
        await axios.post(
          `${process.env.REACT_APP_API_URL}users`,
          {},
          {
            headers: {
              authorization: idToken,
            },
          }
        )
        this.redirect()
      })
    } catch {
      this.redirect()
    }
  }

  redirect = to => {
    const route = localStorage.getItem('loginRedirection')
    localStorage.removeItem('loginRedirection')
    window.location = to || route || '/'
  }

  render() {
    return <div>Redirecting...</div>
  }
}

export default Redirect
