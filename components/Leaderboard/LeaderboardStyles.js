import styled from 'styled-components'

export const LeaderboardItem = styled.div`
  background-color: #1c1c1c;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid #2e2e2e;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  h1 {
    font-size: 18px;
    margin-bottom: 0;
    display: inline-block;
    margin-left: 20px;
  }
`

export const Score = styled.div`
  line-height: 29px;
  span {
    color: white;
  }
  svg {
    ${({ position }) => {
      switch (position) {
        case 1:
          return 'color: #FACC2E;'
        case 2:
          return 'color: #BDBDBD;'
        case 3:
          return 'color: #DF7401;'
        default:
          return null
      }
    }}
    margin-left: 10px;
  }
`

export default LeaderboardItem
