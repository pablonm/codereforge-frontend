import styled from 'styled-components'
import { Col } from 'antd'

export const Container = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #2e2e2e;
`

export const EditorContainer = styled.div`
  height: 386px;
`

export const FieldsContainer = styled(Col)`
  margin-top: 38px;
  padding-left: 10px;
`

export const ButtonsContainer = styled(Col)`
  margin-top: -20px;
`

export default Container
