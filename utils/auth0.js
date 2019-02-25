import auth0 from 'auth0-js'
import Router from 'next/router'

const getAuth0 = () => {
  return new auth0.WebAuth({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_CLIENT_DOMAIN,
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

export const login = () => {
  localStorage.setItem('loginRedirection', Router.pathname)
  getAuth0().authorize(getOptions())
}
export const logout = () => getAuth0().logout({ returnTo: getBaseUrl() })
export const parseHash = callback => getAuth0().parseHash(callback)
export const isAuthenticated = () => true
