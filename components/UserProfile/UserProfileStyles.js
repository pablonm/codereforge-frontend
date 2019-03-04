import styled from 'styled-components'
import { Avatar as AntAvatar, Tabs as AntTabs } from 'antd'

export const Container = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border: 1px solid #2e2e2e;

  > h1 {
    font-size: 24px;
    border-bottom: 1px solid #2e2e2e;
  }
`

export const Avatar = styled(AntAvatar)`
  height: 100px;
  width: 100px;
  margin-right: 20px;
`

export const UserName = styled.h2`
  margin-bottom: 0;
  > span {
    :nth-child(1) {
      margin-left: 20px;
    }
    margin-right: 20px;
    font-size: 18px;

    svg {
      margin-right: 5px;
    }
  }
`

export const UserInfo = styled.div`
  > span {
    :nth-child(1) {
      font-size: 18px;
    }
    :nth-child(2) {
      margin-top: 10px;
    }
    display: block;
    > svg {
      margin-right: 10px;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const Tabs = styled(AntTabs)`
  .ant-tabs-bar {
    border-color: #2e2e2e;
  }

  .ant-tabs-content {
    border-color: #2e2e2e;
  }
`
