import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'
import { CommentContainer, CommentContent } from './CommentStyles'
import UserInfo from '../../../uikit/UserInfo'
import { formatComplete } from '../../../../utils/dates'

const Comment = ({ comment }) => {
  const { author, content, created_at } = comment
  return (
    <CommentContainer>
      <UserInfo>
        <Avatar shape="square" src={author.picture} />
        <div>
          <div>{author.name}</div>
          <span>{formatComplete(created_at)}</span>
        </div>
      </UserInfo>
      <CommentContent>{content}</CommentContent>
    </CommentContainer>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
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
  }).isRequired,
}

export default Comment
