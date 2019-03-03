import styled from 'styled-components'

export const EditorContainer = styled.div`
  height: 100%;
  .react-codemirror2 {
    height: 100%;
  }
  .CodeMirror {
    ${({ error }) => error && 'border: 1px solid #f5222d;'}
    height: 100%;
    border-radius: 3px;
  }
`

export const ErrorMessage = styled.span`
  color: #f5222d;
`
