import styled, { createGlobalStyle } from 'styled-components'
import { Select as AntSelect } from 'antd'

const Select = styled(AntSelect)`
  width: 100%;

  .ant-select-selection {
    border-color: #2e2e2e;
  }

  .ant-select-arrow {
    color: rgba(255, 255, 255, 0.65);
  }

  .ant-select-selection__choice {
    background-color: #d358f7;
    border: none;
    border-radius: 2px;
    color: white;
    padding-top: 1px;
    font-weight: 900;

    .ant-select-selection__choice__remove {
      color: white;
    }
  }
`

export const SelectDropdownStyle = createGlobalStyle`
  .ant-select-dropdown-menu-item-selected {
    background-color: #1c1c1c !important;
    :hover {
      border-color: #2e2e2e !important;
    }
  }
`

export default Select
