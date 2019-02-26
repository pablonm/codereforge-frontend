import styled from 'styled-components'
import { Tag as AntTag } from 'antd'

export const PostContainer = styled.article`
  height: 100px;
  border: 1px solid #2e2e2e;
  background-color: #1c1c1c;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    border-color: #585858;
  }
`

export const Title = styled.h2``

export const Tags = styled.div``

export const Tag = styled(AntTag)`
  color: white;
  background: #610b21;
  border-color: #8a084b;
`
export const Comments = styled.div`
  display: inline-block;
`
