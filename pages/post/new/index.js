import React, { Component } from 'react'
import Router from 'next/router'
import { Row, Col, Form, Button } from 'antd'
import getAxios from '../../../utils/axios'
import Select, { SelectDropdownStyle } from '../../../components/Common/Forms/Select'
import Input from '../../../components/Common/Forms/Input'
import TextArea from '../../../components/Common/Forms/TextArea'
import withUser from '../../../components/HOC/withUser'
import CodeEditor from '../../../components/Common/CodeEditor/CodeEditor'
import Header from '../../../components/Common/Header/Header'

class NewPost extends Component {
  state = {
    codeFiles: [''],
    currentCodeFile: 0,
    language: 'javascript',
    tags: [],
    saving: false,
  }

  codeChangeHandler = code => {
    this.setState(prevState => ({
      codeFiles: prevState.codeFiles.map((file, index) =>
        index === prevState.currentCodeFile ? code : file
      ),
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
    const { codeFiles, tags } = this.state
    form.validateFieldsAndScroll(async (err, values) => {
      if (err) return
      this.setState({ saving: true })
      try {
        await getAxios().post('posts', {
          ...values,
          codeFiles,
          tags: values.tags.map(tag => {
            return tags.find(t => t.name === tag)._id
          }),
        })
        this.setState({ saving: false })
        Router.push('/')
      } catch {
        this.setState({ saving: false })
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      user,
    } = this.props
    const { tags, saving, language } = this.state

    return (
      <Form>
        <SelectDropdownStyle />
        <Header user={user} />
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1 style={{ fontSize: '25px', marginTop: '20px' }}>New post</h1>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div style={{ height: '388px' }}>
                  <CodeEditor
                    language={language}
                    onChange={this.codeChangeHandler}
                    onLanguageChange={this.languageChangeHandler}
                  />
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={{ span: 11, offset: 1 }}
                lg={{ span: 11, offset: 1 }}
                xl={{ span: 11, offset: 1 }}
                style={{ marginTop: '38px' }}
              >
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
                  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Button
                      loading={saving}
                      disabled={saving}
                      style={{ width: '100%' }}
                      type="primary"
                      onClick={this.submitPost}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default withUser(Form.create()(NewPost))
