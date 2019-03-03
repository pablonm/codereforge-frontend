import styled from 'styled-components'
import { Tag as AntTag } from 'antd'

export const Tag = styled(AntTag)`
  background-color: #d358f7;
  border: none;
  border-radius: 2px;
  color: white;
  padding-top: 1px;
  font-weight: 900;

  ${props => !props.clickable && 'cursor: default;'}

  :hover {
    opacity: 1;
    background-color: #d358f7;
  }
`

export default Tag
