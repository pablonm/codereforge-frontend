import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { Form, Button } from 'antd'
import TextArea from 'uikit/TextArea'
import { Container, Title, Buttons } from './NewRefactoringStyles'

const CodeEditor = dynamic(() => import('Common/CodeEditor/CodeEditor'), {
  ssr: false,
})

class NewRefactoring extends Component {
  state = {
    code: null,
    showCodeError: false,
    language: null,
  }

  codeChangeHandler = value => {
    this.setState({ code: value, showCodeError: false })
  }

  languageChangeHandler = value => {
    this.setState({ language: value })
  }

  submitRefactoring = () => {
    const { form, onSubmit, language: propsLanguage } = this.props
    const { code, language } = this.state
    this.setState({ showCodeError: !code })
    form.validateFieldsAndScroll((err, values) => {
      if (err || !code) return
      onSubmit({
        ...values,
        code,
        language: language || propsLanguage,
      })
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      code,
      language,
      saving,
      onCancel,
    } = this.props
    const { showCodeError } = this.state
    return (
      <Container>
        <Title>New Refactoring</Title>
        <CodeEditor
          error={showCodeError ? 'Please provide a refactored code' : null}
          code={code}
          language={language}
          onChange={this.codeChangeHandler}
          onLanguageChange={this.languageChangeHandler}
        />
        <Form>
          <Form.Item>
            <div style={{ marginTop: '20px' }}>
              {getFieldDecorator('description', {
                rules: [
                  { required: true, message: 'Please provide a description of your refactoring' },
                ],
              })(
                <TextArea
                  rows="5"
                  autoComplete="off"
                  placeholder="Describe your refactoring and the improvements..."
                />
              )}
            </div>
          </Form.Item>
        </Form>
        <Buttons>
          <Button type="primary" onClick={onCancel} ghost>
            Cancel
          </Button>
          <Button type="primary" onClick={this.submitRefactoring} disbled={saving} loading={saving}>
            Submit
          </Button>
        </Buttons>
      </Container>
    )
  }
}

NewRefactoring.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  saving: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
}

NewRefactoring.defaultProps = {
  saving: false,
}

export default Form.create()(NewRefactoring)
