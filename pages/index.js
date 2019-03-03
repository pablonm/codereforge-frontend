import React from 'react'
import getAxios from '../utils/axios'
import PostList from '../components/Common/PostList/PostList'
import Layout from '../components/Common/Layout/Layout'

const Home = ({ posts }) => {
  return <Layout render={() => <PostList posts={posts} />} />
}

Home.getInitialProps = async () => {
  const { data } = await getAxios().get('/posts')
  return { posts: data }
}

export default Home
