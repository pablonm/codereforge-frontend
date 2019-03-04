import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Checkbox } from 'antd'
import Input from '../../../uikit/Input'
import { FormItem, Buttons } from './UserProfileEditStyles'

const UserProfileEdit = ({ user, form, form: { getFieldDecorator }, onSave, onCancel, saving }) => {
  const saveProfileHandler = () => {
    form.validateFieldsAndScroll((err, values) => {
      if (err) return
      onSave(values)
    })
  }

  return (
    <Fragment>
      <Form>
        <FormItem label="Name" colon={false}>
          {getFieldDecorator('name', {
            initialValue: user.name,
            rules: [{ required: true, message: 'Please input your name' }],
          })(<Input autoComplete="off" placeholder="Your name..." />)}
        </FormItem>
        <FormItem label="Email" colon={false}>
          {getFieldDecorator('email', {
            initialValue: user.email,
            rules: [{ required: true, message: 'Please input your email' }],
          })(<Input autoComplete="off" placeholder="Your name..." disabled />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('emailPublic')(
            <Checkbox defaultChecked={user.emailPublic}>Email is public</Checkbox>
          )}
        </FormItem>
        <FormItem label="Profession" colon={false}>
          {getFieldDecorator('profession', {
            initialValue: user.profession,
          })(<Input autoComplete="off" placeholder="Your profession..." />)}
        </FormItem>
        <FormItem label="GitHub" colon={false}>
          {getFieldDecorator('github', {
            initialValue: user.github,
          })(<Input autoComplete="off" placeholder="Your github repository..." />)}
        </FormItem>
        <FormItem label="LinkedIn" colon={false}>
          {getFieldDecorator('linkedin', {
            initialValue: user.linkedin,
          })(<Input autoComplete="off" placeholder="Your linkedin profile..." />)}
        </FormItem>
      </Form>
      <Buttons>
        <Button type="primary" ghost onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="primary" onClick={saveProfileHandler} loading={saving} disabled={saving}>
          Save
        </Button>
      </Buttons>
    </Fragment>
  )
}

UserProfileEdit.propTypes = {
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
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
}

export default Form.create()(UserProfileEdit)
