import React, { Component } from 'react'
import PropTypes from 'prop-types'

let CodeMirror

class CodeEditor extends Component {
  state = {
    render: false,
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    CodeMirror = require('react-codemirror2')
    require('codemirror/mode/xml/xml')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/theme/darcula.css')
    require('codemirror/lib/codemirror.css')
    this.setState({ render: true })
  }

  render() {
    const { render } = this.state
    const { onChange } = this.props
    if (!render) return null
    return (
      <CodeMirror.UnControlled
        value=""
        options={{
          mode: 'xml',
          theme: 'darcula',
          lineNumbers: true,
        }}
        onChange={(editor, data) => onChange(data)}
      />
    )
  }
}

export default CodeEditor
