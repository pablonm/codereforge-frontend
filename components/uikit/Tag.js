import styled from 'styled-components'
import { Tag as AntTag } from 'antd'

export const Tag = styled(AntTag)`
  background-color: #1890ff;
  border: none;
  border-radius: 2px;
  color: white;
  padding-top: 1px;
  ${props => !props.clickable && 'cursor: default;'}

  :hover {
    opacity: 1;
  }
`

export default Tag
