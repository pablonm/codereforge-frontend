import styled from 'styled-components'

export const TagFilterContainer = styled.div`
  margin-right: 10px;
`

export const TagContainer = styled.div`
  margin-left: 5px;

  @media (max-width: 768px) {
    display: inline-block;
    margin-left: 0;
  }
`

export const NoAppliedTags = styled.div`
  margin: 20px 0;
  font-style: italic;
  color: rgba(255, 255, 255, 0.65);
`

export const MoreTags = styled(NoAppliedTags)`
  margin: 20px 0;
  font-style: italic;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 768px) {
    float: right;
  }
`
