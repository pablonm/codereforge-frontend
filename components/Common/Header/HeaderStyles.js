import styled from 'styled-components'
import { Row, Col, Button } from 'antd'

export const Logo = styled.img`
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
`

export const HeaderContainer = styled(Row)`
  background-color: #1c1c1c;
  border-bottom: 1px solid #2e2e2e;
`

export const UserBar = styled(Col)`
  display: flex;
  justify-content: flex-end;
`

export const UserBarClickable = styled.div`
  height: 100%;
  width: 50px;
  display: inline-block;
  text-align: center;

  :hover {
    background-color: #2e2e2e;
    cursor: pointer;
  }
`

export const Notifications = styled(UserBarClickable)`
  .ant-badge {
    margin-top: 17px;
  }

  svg {
    font-size: 20px;
  }
`

export const User = styled(UserBarClickable)`
  .ant-avatar {
    margin-top: 10px;
  }
`

export const LoginButton = styled(Button)`
  background-color: transparent !important;
  margin-top: 8px;

  svg {
    margin-right: 10px;
  }
`

export default Logo
