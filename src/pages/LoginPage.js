import React, {Fragment} from 'react'
import styled from 'styled-components'
import {LoginForm} from "../components/LoginForm";
import image from '../assets/background.png'
import {adaptiveHeightMobile} from "../mixin";

const adaptiveWidthWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vw - 1100px) / (1920 - 1100)))`
}

const StyledTitle = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  
  @media(min-width: 1100px) {
    font-size: ${adaptiveWidthWeb(25, 48)};
    line-height: ${adaptiveWidthWeb(32, 56)};
  }
  
  @media(max-width: 1100px) {
    width: ${adaptiveHeightMobile(210, 307)};
    max-width: 400px;
    font-size: ${adaptiveHeightMobile(25, 48)};
    line-height: ${adaptiveHeightMobile(32, 56)};
  }
  
  @media (max-width: 1100px) and (min-height: 1000px) {
    font-size: 48px;
    line-height: 56px;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  width: 51vw;
  height: 100vh; 
  right: 0;
  top: 0;
  
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -240px;
  
  @media (min-width: 1920px) {
    background-position: 47%;
  }
  
  @media(max-width: 1100px) {
    display: none;
  }
`

const LoginBlock = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 12.7vh;
  margin-left: 17.6vw;
  width: 16vw;
  
  @media(max-width: 1100px) {
    align-items: center;
    margin: 8vh auto;
    width: 81.8vw;
  }
`

export const LoginPage = () => {
  return (
    <Fragment>
      <LoginBlock>
        <StyledTitle>{"Welcome to a todo app"}</StyledTitle>
        <LoginForm />
      </LoginBlock>
      <BackgroundImage/>
    </Fragment>
  )
}
