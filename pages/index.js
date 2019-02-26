import React from 'react'
import { Row, Col } from 'antd'
import getAxios from '../utils/axios'
import Header from '../components/Common/Header/Header'
import Posts from '../components/Common/Posts/Posts'
import NewPostWidget from '../components/Common/NewPostWidget/NewPostWidget'
import withUser from '../components/HOC/withUser'

const Home = ({ posts, user }) => {
  return (
    <div>
      <Header user={user} />
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
        >
          <div>Welcome to CodeReforge!</div>
          <Row>
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <p>Filters</p>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <Posts posts={posts} />
            </Col>
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <NewPostWidget isAuthenticated={!!user} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

Home.getInitialProps = async () => {
  const { data } = await getAxios().get('/posts')
  return { posts: data }
}

export default withUser(Home)
