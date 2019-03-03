import styled from 'styled-components'

export const Container = styled.div`
  background-color: #1c1c1c;
  margin-bottom: 10px;
  border: 1px solid #2e2e2e;
`

export const Header = styled.div`
  padding: 20px;
  cursor: pointer;
  display: flex;

  > div {
    flex-grow: 1;
  }
`

export const CollapseIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 900;
  color: #096dd9;
`

export const Score = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 900;
  margin-right: 20px;
  font-size: 18px;
  min-width: 50px;
  text-align: center;
`

export const Content = styled.div`
  border-top: 1px solid #2e2e2e;
  padding: 20px;
`

export const Description = styled.p`
  padding: 10px;
  border: 1px solid #2e2e2e;
  border-radius: 3px;
`

export const Actions = styled.div`
  margin-top: 10px;

  button {
    margin-right: 5px;
  }
`

export default Container
