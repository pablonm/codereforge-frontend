import React from 'react'
import PropTypes from 'prop-types'
import NoSRR from 'react-no-ssr'
import { Form, Button } from 'antd'
import TextArea from '../../uikit/TextArea'
import { isAuthenticated } from '../../../utils/auth0'
import { AuthenticateMessage, Buttons } from './NewCommentStyles'

const NewComment = ({ onSubmit, form, saving }) => {
  const { getFieldDecorator } = form

  const submitCommentHanlder = () => {
    form.validateFieldsAndScroll((err, values) => {
      if (err) return
      onSubmit(values)
      form.resetFields()
    })
  }

  return (
    <NoSRR>
      {!isAuthenticated() ? (
        <AuthenticateMessage>Login to leave a comment</AuthenticateMessage>
      ) : (
        <Form>
          <Form.Item>
            {getFieldDecorator('content', {
              rules: [{ required: true, message: 'Please write a comment before submitting' }],
            })(<TextArea rows="3" autoComplete="off" placeholder="Your comment..." />)}
          </Form.Item>
          <Buttons>
            <Button
              loading={saving}
              disabled={saving}
              type="primary"
              onClick={submitCommentHanlder}
            >
              Comment
            </Button>
          </Buttons>
        </Form>
      )}
    </NoSRR>
  )
}

NewComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool,
}

NewComment.defaultProps = {
  saving: false,
}

export default Form.create()(NewComment)
