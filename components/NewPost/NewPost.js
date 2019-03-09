import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { Row, Col, Form, Button } from 'antd'
import getAxios from 'utils/axios'
// import CodeEditor from 'Common/CodeEditor/CodeEditor'
import Input from 'uikit/Input'
import TextArea from 'uikit/TextArea'
import Select, { SelectDropdownStyle } from 'uikit/Select'
import {
  Container,
  Title,
  FieldsContainer,
  EditorContainer,
  ButtonsContainer,
} from './NewPostStyles'

const CodeEditor = dynamic(() => import('Common/CodeEditor/CodeEditor'), {
  ssr: false,
})

class NewPost extends Component {
  state = {
    codeFiles: [''],
    currentCodeFile: 0,
    language: 'javascript',
    tags: [],
    saving: false,
    showCodeError: false,
  }

  codeChangeHandler = code => {
    this.setState(prevState => ({
      codeFiles: prevState.codeFiles.map((file, index) =>
        index === prevState.currentCodeFile ? code : file
      ),
      showCodeError: false,
    }))
  }

  languageChangeHandler = language => {
    this.setState({ language })
  }

  componentDidMount = async () => {
    const { data } = await getAxios().get('tags')
    this.setState({ tags: data })
  }

  submitPost = () => {
    const { form } = this.props
    const { codeFiles, tags, language } = this.state
    this.setState({ showCodeError: !codeFiles[0] })
    form.validateFieldsAndScroll(async (err, values) => {
      if (err || !codeFiles[0]) return
      this.setState({ saving: true })
      try {
        const newPost = await getAxios().post('posts', {
          ...values,
          codeFiles,
          language,
          tags: values.tags.map(tag => {
            return tags.find(t => t.name === tag)._id
          }),
        })
        this.setState({ saving: false })
        Router.push(`/post/${newPost.data._id}`)
      } catch {
        this.setState({ saving: false })
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props
    const { tags, saving, language, showCodeError } = this.state
    return (
      <Container>
        <Form>
          <SelectDropdownStyle />
          <Title>New post</Title>
          <Row>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <EditorContainer>
                <CodeEditor
                  language={language}
                  onChange={this.codeChangeHandler}
                  onLanguageChange={this.languageChangeHandler}
                  error={showCodeError ? 'Please provide some code to refactor' : null}
                />
              </EditorContainer>
            </Col>
            <FieldsContainer xs={24} sm={24} md={10} lg={10} xl={10}>
              <Form.Item>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input the post name' }],
                })(<Input autoComplete="off" placeholder="Post name..." />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('tags', {
                  rules: [{ required: true, message: 'Please input the post name' }],
                })(
                  <Select mode="multiple" placeholder="Tags...">
                    {tags.map(tag => (
                      <Select.Option key={tag._id} value={tag.name}>
                        {tag.name}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('description', {
                  rules: [{ required: true, message: 'Please input the description' }],
                })(
                  <TextArea
                    rows="12"
                    autoComplete="off"
                    placeholder="Description of your code..."
                  />
                )}
              </Form.Item>
              <Row type="flex" justify="end">
                <ButtonsContainer xs={24} sm={24} md={6} lg={6} xl={6}>
                  <Button
                    loading={saving}
                    disabled={saving}
                    style={{ width: '100%' }}
                    type="primary"
                    onClick={this.submitPost}
                  >
                    Save
                  </Button>
                </ButtonsContainer>
              </Row>
            </FieldsContainer>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default Form.create()(NewPost)
