import React, { Component } from 'react'
import { Row, Col, Spin } from 'antd'
import getAxios from 'utils/axios'
import { parseHash, storeSession } from 'utils/auth0'

class Redirect extends Component {
  componentDidMount = () => {
    try {
      parseHash(async (err, result) => {
        if (err) {
          localStorage.setItem('authError', true)
          this.redirect('/')
          return
        }
        storeSession(result)
        await getAxios().post('/users', {})
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
    return (
      <Row type="flex" justify="center">
        <Col style={{ marginTop: '100px' }}>
          <Spin size="large" tip="Redirecting..." />
        </Col>
      </Row>
    )
  }
}

export default Redirect
