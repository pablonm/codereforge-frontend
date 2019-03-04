import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Button, Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAxios from '../../../utils/axios'
import { Container, Avatar, UserName, UserInfo, Buttons } from './UserProfileStyles'
import UserProfileEdit from './UserProfileEdit/UserProfileEdit'

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
      <Container>
        <h1>User Profile</h1>
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
                    10
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
    )
  }
}

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
    posts: PropTypes.arrayOf(PropTypes.string),
    refactorings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

UserProfile.defaultProps = {
  editable: false,
}

export default UserProfile
