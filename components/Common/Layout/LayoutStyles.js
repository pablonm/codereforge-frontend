import styled from 'styled-components'
import { Col } from 'antd'

export const BodyCol = styled(Col)`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const WidgetsCol = styled(Col)`
  padding-left: 10px;

  @media (max-width: 768px) {
    padding-left: 0;
    order: -1;
  }
`
