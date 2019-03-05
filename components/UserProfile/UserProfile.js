import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Button, Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAxios from '../../utils/axios'
import { Container, Avatar, UserName, UserInfo, Buttons, Tabs } from './UserProfileStyles'
import UserProfileEdit from './UserProfileEdit/UserProfileEdit'
import PostList from '../Common/PostList/PostList'

class UserProfile extends Component {
  state = {
    editing: false,
    saving: false,
  }

  toggleEditing = () => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }))
  }

  saveProfileHandler = async values => {
    this.setState({ saving: true })
    await getAxios().put('users', values)
    window.location.reload()
  }

  render() {
    const { editable, user } = this.props
    const { editing, saving } = this.state
    return (
      <Tabs defaultActiveKey="profile" animated={false} tabPosition="left">
        <Tabs.TabPane tab="Profile" key="profile">
          <Container>
            <Row type="flex">
              <div>
                <Avatar shape="square" src={user.picture} icon="user" />
              </div>
              {!editing ? (
                <div style={{ flexGrow: '1' }}>
                  <UserName>
                    {user.name}
                    <span>
                      <Tooltip title="Posts">
                        <FontAwesomeIcon icon="marker" />
                        {user.posts.length}
                      </Tooltip>
                    </span>
                    <span>
                      <Tooltip title="Refactorings">
                        <FontAwesomeIcon icon="code" />
                        {user.refactorings.length}
                      </Tooltip>
                    </span>
                    <span>
                      <Tooltip title="Score">
                        <FontAwesomeIcon icon="award" />
                        {user.score}
                      </Tooltip>
                    </span>
                  </UserName>
                  <UserInfo>
                    {user.profession && <span>{user.profession}</span>}
                    {user.email && user.emailPublic && (
                      <span>
                        <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'envelope' }} />
                        {user.email}
                      </span>
                    )}
                    {user.github && (
                      <span>
                        <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'github' }} />
                        <a href={`//${user.github}`} target="_blank" rel="noopener noreferrer">
                          {user.github}
                        </a>
                      </span>
                    )}
                    {user.linkedin && (
                      <span>
                        <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} />
                        <a href={`//${user.linkedin}`} target="_blank" rel="noopener noreferrer">
                          {user.linkedin}
                        </a>
                      </span>
                    )}
                  </UserInfo>
                  {editable && (
                    <Buttons>
                      <Button type="primary" onClick={this.toggleEditing}>
                        Edit
                      </Button>
                    </Buttons>
                  )}
                </div>
              ) : (
                <div style={{ flexGrow: '1' }}>
                  <UserProfileEdit
                    onSave={this.saveProfileHandler}
                    onCancel={this.toggleEditing}
                    saving={saving}
                    user={user}
                  />
                </div>
              )}
            </Row>
          </Container>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Posts" key="posts">
          <PostList posts={user.posts} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Refactorings" key="refactorings">
          <PostList
            posts={user.refactorings
              .filter(
                (refactoring, index, self) =>
                  index === self.findIndex(r => r.post._id === refactoring.post._id)
              )
              .map(r => r.post)}
          />
        </Tabs.TabPane>
      </Tabs>
    )
  }
}

const postShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  comments: PropTypes.arrayOf(PropTypes.string),
  refactorings: PropTypes.arrayOf(PropTypes.string),
})

UserProfile.propTypes = {
  editable: PropTypes.bool,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    emailPublic: PropTypes.bool.isRequired,
    profession: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    picture: PropTypes.string,
    posts: PropTypes.arrayOf(postShape),
    refactorings: PropTypes.arrayOf(
      PropTypes.shape({
        post: postShape,
      })
    ),
  }).isRequired,
}

UserProfile.defaultProps = {
  editable: false,
}

export default UserProfile
