import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostContainer, Title, Tags, Tag, Comments } from './PostStyles'

const Post = ({ post }) => {
  return (
    <Row>
      <Col md={24}>
        <PostContainer>
          <Title>{post.name}</Title>
          <Tags>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
          </Tags>
          <Comments>
            <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'file-code' }} />
            <span>
              <strong>1</strong> file
            </span>
          </Comments>
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
    tags: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
}

export default Post
