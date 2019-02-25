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
      color: rgba(255, 255, 255, 0.65);
    }
  }
`

export default UserMenuDropdownStyle
