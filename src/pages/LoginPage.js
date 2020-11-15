import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Title} from "../components/Title";
import {LoginForm} from "../components/LoginForm";
import image from '../assets/background.png'

const BackgroundImage = styled.div`
  position: absolute;
  width: 51vw;
  height: 100vh; 
  right: 0;
  top: 0;
  
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -222px;
  
  @media (min-width: 1920px) {
    background-position: 47%;
  }
  
  @media(max-width: 1500px) {
    display: none;
  }
`

const LoginBlock = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 12.7vh;
  margin-left: 17.6vw; //TODO: че за
  width: 16vw;
  
  @media(max-width: 1500px) {
    align-items: center;
    margin: 8vh auto;
    width: 81.8vw;
  }
`

export const LoginPage = () => {
  return (
    <Fragment>
      <LoginBlock>
        <Title title={"Welcome to a todo app"}/>
        <LoginForm />
      </LoginBlock>
      <BackgroundImage/>
    </Fragment>
  )
}
