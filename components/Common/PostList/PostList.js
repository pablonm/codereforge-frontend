import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'
import { NoPostsMessage } from './PostListStyles'

const PostList = ({ posts, noPostsMessage }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
      {posts.length === 0 && <NoPostsMessage>{noPostsMessage}</NoPostsMessage>}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.string),
      refactorings: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            post: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.arrayOf(
                PropTypes.shape({
                  _id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                  code_files: PropTypes.arrayOf(PropTypes.string),
                  comments: PropTypes.arrayOf(PropTypes.string),
                  refactorings: PropTypes.arrayOf(PropTypes.string),
                })
              ),
            ]),
          }),
        ])
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
  noPostsMessage: PropTypes.string,
}

PostList.defaultProps = {
  posts: [],
  noPostsMessage: 'No posts yet',
}

export default PostList
