import styled from 'styled-components'
import { Radio } from 'antd'

export const RadioButton = styled(Radio.Button)`
  &.ant-radio-button-wrapper {
    border-color: #2e2e2e;
    background: #1c1c1c;

    ::before {
      background: #2e2e2e !important;
    }
  }
  &.ant-radio-button-wrapper-checked {
    background: #1890ff;
    font-weight: 900;

    > span:last-child {
      color: white;
    }
  }
`

export default RadioButton
