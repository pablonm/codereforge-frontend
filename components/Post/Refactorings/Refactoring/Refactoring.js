import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Button } from 'antd'
import UserInfo from 'uikit/UserInfo'
import getAxios from 'utils/axios'
import { formatComplete } from 'utils/dates'
import CodeEditor from 'Common/CodeEditor/CodeEditor'
import Comments from 'Common/Comments/Comments'
import {
  Container,
  Header,
  CollapseIcon,
  Score,
  Content,
  Description,
  Actions,
} from './RefactoringStyle'

class Refactoring extends Component {
  state = {
    collapsed: true,
    savingComment: false,
    addedComments: [],
    voted: false,
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }))
  }

  newCommentHandler = async refactoring => {
    const {
      refactoring: { _id },
    } = this.props
    this.setState({ savingComment: true })
    const newComment = await getAxios().post('/comments/refactoring', {
      ...refactoring,
      refactoringId: _id,
    })
    this.setState(prevState => ({
      savingComment: false,
      addedComments: [...prevState.addedComments, newComment.data],
    }))
  }

  vote = async amount => {
    const {
      refactoring: { _id },
    } = this.props
    await getAxios().post('/refactorings/vote', {
      vote: amount,
      refactoringId: _id,
    })
    this.setState({ voted: true })
  }

  alreadyVoted = () => {
    const { refactoring, user } = this.props
    if (!user) return false
    return refactoring.voters.includes(user._id)
  }

  isAuthor = () => {
    const { refactoring, user } = this.props
    if (!user) return false
    return refactoring.author._id === user._id
  }

  render() {
    const { refactoring, user } = this.props
    const { author, code_files, score, description, comments } = refactoring
    const { collapsed, savingComment, addedComments, voted } = this.state
    return (
      <Container>
        <Header onClick={this.toggleCollapse}>
          <Score>{voted ? score + 1 : score}</Score>
          <UserInfo>
            <Avatar shape="square" src={author.picture} icon="user" />
            <div>
              <div>{author.name}</div>
              <span>{formatComplete(refactoring.created_at)}</span>
            </div>
          </UserInfo>
          <CollapseIcon>[ {collapsed ? '+' : '-'} ]</CollapseIcon>
        </Header>
        {!collapsed && (
          <Content>
            <Description>{description}</Description>
            <CodeEditor code={code_files[0].code} language={code_files[0].language} readonly />
            <Actions>
              <Button
                type="primary"
                icon="caret-up"
                size="small"
                disabled={voted || this.alreadyVoted() || !user || this.isAuthor()}
                onClick={() => this.vote(1)}
              >
                Vote up
              </Button>
              <Button
                type="primary"
                icon="caret-down"
                size="small"
                disabled={voted || this.alreadyVoted() || !user || this.isAuthor()}
                onClick={() => this.vote(-1)}
              >
                Vote down
              </Button>
              {voted || (this.alreadyVoted() && <span>You already voted this refactoring</span>)}
              {!user && <span>Login to vote for this refactoring</span>}
              {this.isAuthor() && <span>You can not vote your own refactoring</span>}
            </Actions>
            <div style={{ marginTop: '20px' }}>
              <Comments
                comments={comments}
                onNewComment={this.newCommentHandler}
                addedComments={addedComments}
                saving={savingComment}
              />
            </div>
          </Content>
        )}
      </Container>
    )
  }
}

const authorShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string,
})

Refactoring.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  refactoring: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: authorShape,
    description: PropTypes.string.isRequired,
    code_files: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
      })
    ),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        content: PropTypes.string,
        author: authorShape,
        parent: PropTypes.string,
        created_at: PropTypes.string,
      })
    ),
    created_at: PropTypes.string.isRequired,
  }).isRequired,
}

Refactoring.defaultProps = {
  user: null,
}

export default Refactoring
