import React, { Component, Fragment } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { Avatar, Button } from 'antd'
import Tag from 'uikit/Tag'
import UserInfo from 'uikit/UserInfo'
import Comments from 'Common/Comments/Comments'
import { formatComplete } from 'utils/dates'
import getAxios from 'utils/axios'
import { PostTitle, PostDescription, Container, Buttons } from './PostStyles'
import NewRefactoring from './NewRefactoring/NewRefactoring'
import Refactorings from './Refactorings/Refactorings'

const CodeEditor = dynamic(() => import('Common/CodeEditor/CodeEditor'), {
  ssr: false,
})

class Post extends Component {
  state = {
    savingNewPostComment: false,
    addedPostComments: [],
    addingRefactoring: false,
    savingRefactoring: false,
    addedRefactorings: [],
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

  toggleAddingRefactoring = () => {
    this.setState(prevState => ({
      addingRefactoring: !prevState.addingRefactoring,
    }))
  }

  submitRefactoringHandler = async refactoring => {
    const {
      post: { _id },
    } = this.props
    this.setState({ savingRefactoring: true })
    const newRefactoring = await getAxios().post('/refactorings', {
      description: refactoring.description,
      codeFiles: [refactoring.code],
      language: refactoring.language,
      postId: _id,
    })
    this.setState(prevState => ({
      savingRefactoring: false,
      addedRefactorings: [...prevState.addedRefactorings, newRefactoring.data],
      addingRefactoring: false,
    }))
  }

  render() {
    const {
      savingNewPostComment,
      addedPostComments,
      addingRefactoring,
      savingRefactoring,
      addedRefactorings,
    } = this.state
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
          <Refactorings
            refactorings={refactorings}
            addedRefactorings={addedRefactorings}
            user={user}
          />
        </div>
        {!addingRefactoring ? (
          <div style={{ marginTop: '20px' }}>
            {!user && <span>Login to add a refactoring</span>}
            <Buttons>
              <Button type="primary" disabled={!user} onClick={this.toggleAddingRefactoring}>
                Add a refactoring
              </Button>
            </Buttons>
          </div>
        ) : (
          <NewRefactoring
            onSubmit={this.submitRefactoringHandler}
            code={file.code}
            language={file.language}
            saving={savingRefactoring}
            onCancel={this.toggleAddingRefactoring}
          />
        )}
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
