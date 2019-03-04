import { createGlobalStyle } from 'styled-components'

export const UserMenuDropdownStyle = createGlobalStyle`
  .user-menu {
    .ant-menu {
      border: none;
    }
    
    .ant-menu-item {
      padding-left: 20px;
      padding-right: 30px;

      svg {
        margin-right: 10px;
        width: 20px;
      }
    }

    .ant-menu-item-divider {
      background-color: #2E2E2E;
    }
  }
`

export default UserMenuDropdownStyle
