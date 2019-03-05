import styled, { createGlobalStyle } from 'styled-components'

export const NotificationsDropdownStyle = createGlobalStyle`
  .notifications {
    .ant-menu {
      border: 1px solid #2E2E2E;
    }
    
    .ant-menu-item {
      padding-left: 20px;
      padding-right: 30px;
    }
  }
`

export const NoNotifications = styled.div`
  margin: 10px 0;
  font-style: italic;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
`
