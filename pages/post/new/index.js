import React from 'react'
import Layout from 'Common/Layout/Layout'
import NewPost from 'components/NewPost/NewPost'

const NewPostPage = () => {
  return <Layout render={() => <NewPost />} />
}

export default NewPostPage
