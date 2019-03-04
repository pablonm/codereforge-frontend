import styled from 'styled-components'
import { Form } from 'antd'

export const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    line-height: 1;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`
