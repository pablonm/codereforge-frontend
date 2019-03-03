import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'
import CodeEditor from '../CodeEditor/CodeEditor'
import Tag from '../../uikit/Tag'
import UserInfo from '../../uikit/UserInfo'
import Comments from '../Comments/Comments'
import Refactorings from '../Refactorings/Refactorings'
import { formatComplete } from '../../../utils/dates'
import getAxios from '../../../utils/axios'
import { PostTitle, PostDescription, Container } from './PostStyles'

class Post extends Component {
  state = {
    savingNewPostComment: false,
    addedPostComments: [],
  }

  newPostCommentHandler = async comment => {
    const {
      post: { _id },
    } = this.props
    this.setState({ savingNewPostComment: true })
    const newComment = await getAxios().post('/comments/post', {
      ...comment,
      postId: _id,
    })
    this.setState(prevState => ({
      savingNewPostComment: false,
      addedPostComments: [...prevState.addedPostComments, newComment.data],
    }))
  }

  render() {
    const { savingNewPostComment, addedPostComments } = this.state
    const { post, user } = this.props
    const { author, code_files, tags, comments, refactorings } = post
    const file = code_files[0]

    return (
      <Fragment>
        <Container>
          <UserInfo>
            <Avatar shape="square" src={author.picture} icon="user" />
            <div>
              <div>{author.name}</div>
              <span>{formatComplete(post.created_at)}</span>
            </div>
          </UserInfo>
          <PostTitle>{post.name}</PostTitle>
          {tags.map(tag => (
            <Tag key={tag._id}>{tag.name}</Tag>
          ))}
          <PostDescription>{post.description}</PostDescription>
          <CodeEditor code={file.code} language={file.language} readonly />
          <div style={{ marginTop: '20px' }}>
            <Comments
              comments={comments}
              onNewComment={this.newPostCommentHandler}
              addedComments={addedPostComments}
              saving={savingNewPostComment}
            />
          </div>
        </Container>
        <div style={{ marginTop: '20px' }}>
          <Refactorings refactorings={refactorings} user={user} />
        </div>
      </Fragment>
    )
  }
}

const authorShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string,
})

const codeFileShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
})

Post.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        content: PropTypes.string,
        author: authorShape,
        parent: PropTypes.string,
        created_at: PropTypes.string,
      })
    ),
    refactorings: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        author: authorShape,
        description: PropTypes.string.isRequired,
        code_files: PropTypes.arrayOf(codeFileShape),
        created_at: PropTypes.string.isRequired,
      })
    ),
    code_files: PropTypes.arrayOf(codeFileShape),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    _id: PropTypes.string,
    name: PropTypes.string,
    author: authorShape,
    description: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
}

Post.defaultProps = {
  user: null,
}

export default Post
