import styled from 'styled-components'
import { Input as AntInput } from 'antd'

const Input = styled(AntInput)`
  background-color: #1c1c1c;
  border-color: #2e2e2e;

  &.ant-input-disabled {
    color: rgba(255, 255, 255, 0.35);
  }
`

export default Input
