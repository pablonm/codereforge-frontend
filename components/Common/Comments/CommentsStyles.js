import styled from 'styled-components'

export const Title = styled.div`
  font-size: 16px;
  color: #e6e6e6;
  padding: 5px 0;
  border-bottom: 1px solid #2e2e2e;
  margin-bottom: 10px;
  cursor: pointer;

  span {
    :nth-child(1) {
      font-weight: 900;
      color: #096dd9;
    }
    :nth-child(2) {
      color: #585858;
    }
  }
`

export const NoComments = styled.div`
  font-style: italic;
  text-align: center;
  margin-bottom: 10px;
`
