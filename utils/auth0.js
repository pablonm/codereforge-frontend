import auth0 from 'auth0-js'
import Router from 'next/router'

const getAuth0 = () => {
  return new auth0.WebAuth({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_CLIENT_DOMAIN,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  })
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = () => {
  return {
    responseType: 'token id_token',
    redirectUri: `${getBaseUrl()}/redirect`,
    scope: 'openid profile email',
  }
}

export const storeSession = session => {
  const { idToken, accessToken, expiresIn } = session
  localStorage.setItem('idToken', idToken)
  localStorage.setItem('accessToken', accessToken)
  const expiration = new Date()
  expiration.setSeconds(expiration.getSeconds() + expiresIn)
  localStorage.setItem('expiration', expiration)
}

export const login = () => {
  localStorage.setItem('loginRedirection', Router.asPath)
  getAuth0().authorize(getOptions())
}
export const logout = () => {
  localStorage.removeItem('idToken')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('expiration')
  getAuth0().logout({ returnTo: getBaseUrl() })
}

export const parseHash = callback => getAuth0().parseHash(callback)

export const isAuthenticated = () => {
  try {
    const idToken = localStorage.getItem('idToken')
    const accessToken = localStorage.getItem('accessToken')
    const expiration = localStorage.getItem('expiration')
    if (idToken && accessToken) {
      if (new Date(expiration).getTime() > new Date().getTime()) return true
      logout()
    }
    return false
  } catch {
    return true
  }
}
