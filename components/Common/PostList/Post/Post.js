import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostContainer, Title, Tags, PostInfo, PostInfoUnit } from './PostStyles'
import Tag from '../../../uikit/Tag'

const Post = ({ post }) => {
  const goToPost = id => {
    Router.push(`/post/${id}`)
  }

  return (
    <Row>
      <Col md={24}>
        <PostContainer onClick={() => goToPost(post._id)}>
          <Title>{post.name}</Title>
          <Tags>
            {post.tags.map(tag => (
              <Tag key={tag._id}>{tag.name}</Tag>
            ))}
          </Tags>
          <PostInfo>
            <PostInfoUnit>
              <FontAwesomeIcon icon={{ prefix: 'far', iconName: 'file' }} />
              <span>
                <strong>{post.code_files.length}</strong>
              </span>
            </PostInfoUnit>
            <PostInfoUnit>
              <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'code' }} />
              <span>
                <strong>{post.refactorings.length}</strong>
              </span>
            </PostInfoUnit>
            <PostInfoUnit>
              <FontAwesomeIcon icon={{ prefix: 'far', iconName: 'comment-alt' }} />
              <span>
                <strong>{post.comments.length}</strong>
              </span>
            </PostInfoUnit>
          </PostInfo>
        </PostContainer>
      </Col>
    </Row>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.string),
    refactorings: PropTypes.arrayOf(PropTypes.string),
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
  }).isRequired,
}

export default Post