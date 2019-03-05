import { createGlobalStyle } from 'styled-components'

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

export default NotificationsDropdownStyle
