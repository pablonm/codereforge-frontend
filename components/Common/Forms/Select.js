import styled from 'styled-components'
import { Select as AntSelect } from 'antd'

const Select = styled(AntSelect)`
  width: 100%;
  .ant-select-selection__choice {
    background-color: #1890ff;
    border-color: #1890ff;
    color: white;
  }
`

export default Select
