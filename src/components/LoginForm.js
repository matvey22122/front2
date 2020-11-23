import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {ApiContext} from "../context/ApiContext";
import {adaptiveHeightMobile} from "../mixin";

const adaptiveWidthWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vw - 1100px) / (1920 - 1100)))`
}

const adaptiveHeightWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vh - 900px) / (1080 - 900)))`
}

const Form = styled.form`
  margin-top: 7.4vh;

  display: flex;
  flex-direction: column;

  @media(max-width: 1100px) {
    margin-top: 13vh;
  }
`

const Input = styled.input`
  max-width: 400px;
  max-height: 70px;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border: 0;
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 700;
  
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  
  @media(min-width: 1100px) {
    margin-top: ${adaptiveHeightWeb(20, 29)};
    width: ${adaptiveWidthWeb(170, 306)};
    height: ${adaptiveWidthWeb(34, 61)};
    font-size: ${adaptiveWidthWeb(11, 14)};
    border-radius: ${adaptiveWidthWeb(7, 10)};
  }
  
  @media(max-width: 1100px) {
    margin-top: ${adaptiveHeightMobile(20, 29)};
    width: ${adaptiveHeightMobile(210, 307)};
    height: ${adaptiveHeightMobile(34, 61)};
    font-size: ${adaptiveHeightMobile(11, 14)};
    border-radius: ${adaptiveHeightMobile(7, 10)};
  }
`

const Label = styled.label` 
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 700;
  margin-top: ${props => !props.first && "34px"};
  
  @media(min-width: 1100px) {
    font-size: ${adaptiveWidthWeb(15, 21)};
  }
  
  @media(max-width: 1100px) {
    font-size: ${adaptiveHeightMobile(15, 21)};
  }
`

const SubmitButton = styled.input`
  max-width: 400px;
  max-height: 70px;

  background: #FFE3D3;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border: 0;
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 900;
  
  @media(min-width: 1100px) {
    margin-top: ${adaptiveHeightWeb(80, 122)};
    width: ${adaptiveWidthWeb(170, 306)};
    height: ${adaptiveWidthWeb(35, 54)};
    font-size: ${adaptiveWidthWeb(13, 18)};
    border-radius: ${adaptiveWidthWeb(7, 10)};
  }
  
  @media(max-width: 1100px) {
    margin-top: ${adaptiveHeightMobile(80, 122)};
    width: ${adaptiveHeightMobile(210, 306)};
    height: ${adaptiveHeightMobile(35, 54)};
    font-size: ${adaptiveHeightMobile(13, 18)};
    border-radius: ${adaptiveHeightMobile(7, 10)};
    
    position: absolute;
    bottom: 0;
    margin-bottom: 34px;
  }
`

export const LoginForm = () => {
  const {getTasks} = useContext(ApiContext)

  const history = useHistory()
  const goToTasks = () => {
    getTasks()
    history.push("/tasks")
  }

  return (
    <Form>
      <Label first htmlFor={"email"}>
        Email
      </Label>
      <Input id={"email"} type="text" placeholder={"Enter email..."}/>
      <Label htmlFor={"password"}>
        Password
      </Label>
      <Input id={"password"} type="password" placeholder={"Enter password..."}/>
      <SubmitButton type="submit" value={"Login"} onClick={() => goToTasks()}/>
    </Form>
  )
}
