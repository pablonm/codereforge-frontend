import styled from 'styled-components'

const UserInfo = styled.div`
  display: flex;
  color: #e6e6e6;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 15px;
    margin-left: 10px;

    div {
      margin-bottom: 4px;
    }

    span {
      font-size: 12px;
    }
  }
`

export default UserInfo
