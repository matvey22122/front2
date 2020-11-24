import React from 'react'
import styled from 'styled-components'
import {adaptiveHeightMobile} from "../mixin";

const TitleSpan = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  
  @media(max-height: 900px), (max-width: 850px) {
    font-size: ${adaptiveHeightMobile(30, 48)};
    line-height: ${adaptiveHeightMobile(40, 56)};
  }
`

export const Title = ({title}) => (
  <TitleSpan>{title}</TitleSpan>
)
