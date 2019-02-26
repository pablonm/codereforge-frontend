import styled from 'styled-components'
import { Card as AntCard, Button as AntButton } from 'antd'

export const Card = styled(AntCard)`
  border: 1px solid #2e2e2e;

  .ant-card-head {
    border-bottom: 1px solid #2e2e2e;
  }
`

export const Button = styled(AntButton)`
  width: 100%;
`

export const AuthenticateMessage = styled.p``
