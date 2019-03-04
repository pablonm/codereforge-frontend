import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Title, NoComments } from './CommentsStyles'
import Comment from './Comment/Comment'
import NewComment from './NewComment/NewComment'

class Comments extends Component {
  state = {
    collapsed: false,
  }

  submitPostCommentHandler = comment => {
    const { onNewComment } = this.props
    if (onNewComment) onNewComment(comment)
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }))
  }

  render() {
    const { comments, saving, addedComments } = this.props
    const { collapsed } = this.state
    return (
      <div>
        <Title onClick={this.toggleCollapse}>
          <span>[ {collapsed ? '+' : '-'} ]</span> Comments{' '}
          <span>({comments.length + addedComments.length})</span>
        </Title>
        {!collapsed && (
          <Fragment>
            {comments.length > 0 || addedComments.length > 0 ? (
              <div>
                {comments.map(comment => (
                  <Comment key={comment._id} comment={comment} />
                ))}
                {addedComments.map(comment => (
                  <Comment key={comment._id} comment={comment} />
                ))}
              </div>
            ) : (
              <NoComments>No comments yet</NoComments>
            )}

            <NewComment saving={saving} onSubmit={this.submitPostCommentHandler} />
          </Fragment>
        )}
      </div>
    )
  }
}

const commentShape = PropTypes.shape({
  _id: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
  score: PropTypes.number,
  voters: PropTypes.arrayOf(PropTypes.string),
  parent: PropTypes.string,
  created_at: PropTypes.string,
})

Comments.propTypes = {
  comments: PropTypes.arrayOf(commentShape),
  onNewComment: PropTypes.func,
  saving: PropTypes.bool,
  addedComments: PropTypes.arrayOf(commentShape),
}

Comments.defaultProps = {
  comments: [],
  onNewComment: null,
  saving: false,
  addedComments: [],
}

export default Comments
