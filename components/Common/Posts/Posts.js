import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.string),
      refactorings: PropTypes.arrayOf(PropTypes.string),
      code_files: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.arrayOf(PropTypes.string),
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
}

Posts.defaultProps = {
  posts: [],
}

export default Posts
