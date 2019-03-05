import React from 'react'
import getAxios from 'utils/axios'
import Home from 'components/Home/Home'

const HomePage = ({ posts, tags }) => {
  return <Home posts={posts} tags={tags} />
}

HomePage.getInitialProps = async () => {
  const posts = await getAxios().get('/posts')
  const tags = await getAxios().get('/tags')
  return { posts: posts.data, tags: tags.data }
}

export default HomePage
