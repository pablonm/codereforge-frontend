import React, { Component } from 'react'
import getAxios from '../../utils/axios'
import { isAuthenticated } from '../../utils/auth0'

const withUser = WrappedComponent => {
  return class extends Component {
    state = {
      user: null,
    }

    static getInitialProps = WrappedComponent.getInitialProps
      ? ctx => WrappedComponent.getInitialProps(ctx)
      : undefined

    componentDidMount = async () => {
      if (isAuthenticated()) {
        const { data } = await getAxios().get('/users/me')
        this.setState({ user: data })
      }
    }

    render() {
      const { user } = this.state
      return <WrappedComponent user={user} {...this.props} />
    }
  }
}

export default withUser
