import styled from 'styled-components'
import { Tag as AntTag } from 'antd'

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  border: 1px solid #2e2e2e;
  background-color: #1c1c1c;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    border-color: #585858;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`

export const Tags = styled.div``

export const Tag = styled(AntTag)`
  background-color: #1890ff;
  border: none;
  border-radius: 2px;
  color: white;
  padding-top: 1px;
`
export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const PostInfoUnit = styled.div`
  display: inline-block;
  margin-left: 20px;

  svg {
    margin-right: 5px;
  }
`
