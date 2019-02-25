import React, { Component } from 'react'
import { parseHash, storeSession } from '../../utils/auth0'

class Redirect extends Component {
  componentDidMount() {
    try {
      parseHash(async (err, result) => {
        if (err) {
          localStorage.setItem('authError', true)
          this.redirect('/')
          return
        }
        storeSession(result)
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
