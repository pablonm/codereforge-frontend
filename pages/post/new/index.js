import React, { Component } from 'react'
import { Row, Col, Form, Input } from 'antd'
import getAxios from '../../../utils/axios'
import Select from '../../../components/Common/Forms/Select'
import withUser from '../../../components/HOC/withUser'
import Header from '../../../components/Common/Header/Header'
import CodeEditor from '../../../components/Common/CodeEditor/CodeEditor'

class NewPost extends Component {
  state = {
    codeFiles: [''],
    currentCodeFile: 0,
    tags: [],
  }

  codeChangeHandler = code => {
    this.setState(prevState => ({
      codeFiles: prevState.codeFiles.map((file, index) =>
        index === prevState.currentCodeFile ? code : file
      ),
    }))
  }

  componentDidMount = async () => {
    const { data } = await getAxios().get('tags')
    this.setState({ tags: data })
  }

  render() {
    const {
      form: { getFieldDecorator },
      user,
    } = this.props
    const { tags } = this.state

    return (
      <Form>
        <Header user={user} />
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <p>This is the NEW post page</p>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the post name' }],
              })(<Input placeholder="Post name" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the post name' }],
              })(
                <Select mode="multiple" placeholder="Please select">
                  {tags.map(tag => (
                    <Select.Option key={tag._id}>{tag.name}</Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <CodeEditor onChange={this.codeChangeHandler} />
          </Col>
        </Row>
      </Form>
    )
  }
}

export default withUser(Form.create()(NewPost))
