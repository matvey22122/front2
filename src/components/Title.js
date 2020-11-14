import React from 'react'
import styled from 'styled-components'

const TitleSpan = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  
  @media(max-height: 900px) {
    font-size: 12.8vw;
    line-height: 7vh;
  }
`

export const Title = ({title}) => (
  <TitleSpan>{title}</TitleSpan>
)