import React, { Component } from 'react'
import { withRouter } from 'next/router'
import getAxios from '../../utils/axios'
import Layout from '../../components/Common/Layout/Layout'
import Post from '../../components/Post/Post'

class PostPage extends Component {
  static getInitialProps = async ({ query }) => {
    const { postId } = query
    const { data } = await getAxios().get(`/posts/${postId}`)
    return { post: data }
  }

  render() {
    const { post } = this.props
    return <Layout render={user => <Post post={post} user={user} />} />
  }
}

export default withRouter(PostPage)
