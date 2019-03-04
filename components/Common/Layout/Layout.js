import React from 'react'
import { Row, Col } from 'antd'
import Header from '../Header/Header'
import withUser from '../../hoc/withUser'
import NewPostWidget from '../NewPostWidget/NewPostWidget'

const Layout = ({ user, render }) => {
  return (
    <Row style={{ marginBottom: '50px' }}>
      <Header user={user} />
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 1 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 16, offset: 4 }}
      >
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          {render(user)}
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{ paddingLeft: '10px' }}>
          <NewPostWidget isAuthenticated={!!user} />
        </Col>
      </Col>
    </Row>
  )
}

export default withUser(Layout)
