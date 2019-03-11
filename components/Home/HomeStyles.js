import styled from 'styled-components'
import { Col, Radio } from 'antd'

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

export const TopFilters = styled.div`
  margin-bottom: 10px;
`

export const Tags = styled(Col)`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
