import React from 'react'
import Layout from 'Common/Layout/Layout'
import NewPost from 'components/NewPost/NewPost'

const NewPostPage = () => {
  return (
    <Layout
      title="New post"
      description="Create a new post with a piece of code so others can propose refactorings to it and we all learn"
      render={() => <NewPost />}
    />
  )
}

export default NewPostPage
