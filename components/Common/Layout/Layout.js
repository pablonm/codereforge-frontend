import React, { Fragment } from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import withUser from 'hoc/withUser'
import NewPostWidget from 'Common/NewPostWidget/NewPostWidget'
import LeaderboardWidget from 'Common/LeaderboardWidget/LeaderboardWidget'
import Header from './Header/Header'
import { BodyCol, WidgetsCol } from './LayoutStyles'

const Layout = ({ user, render, title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {description && <meta name="Description" content={description} />}
      </Head>
      <Row style={{ marginBottom: '50px' }}>
        <Header user={user} />
        <BodyCol
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 1 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
          xl={{ span: 18, offset: 3 }}
        >
          <Row type="flex">
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              {render(user)}
            </Col>
            <WidgetsCol xs={24} sm={24} md={4} lg={4} xl={4}>
              <NewPostWidget isAuthenticated={!!user} />
              <LeaderboardWidget />
            </WidgetsCol>
          </Row>
        </BodyCol>
      </Row>
    </Fragment>
  )
}

Layout.defaultProps = {
  title: 'Codeforge',
}

export default withUser(Layout)
