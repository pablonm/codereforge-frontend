import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.string),
      refactorings: PropTypes.arrayOf(
        PropTypes.shape({
          comments: PropTypes.arrayOf(PropTypes.string),
        })
      ),
      code_files: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
}

PostList.defaultProps = {
  posts: [],
}

export default PostList
