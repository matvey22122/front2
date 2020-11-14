import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  margin-top: 7.4vh;

  display: flex;
  flex-direction: column;

  @media(max-width: 1500px) {
    margin-top: 13vh;
  }
`

const Input = styled.input`
  height: 61px;
  width: 81vw;
  max-width: 400px;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border: 0;
  
  font-family: Roboto,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  
  margin-top: 29px;
  
  @media(max-height: 900px) {
    height: 7.5vh;
    
    font-size: 3.7vw;
  }
`

const Label = styled.label` 
  font-family: Roboto,serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  
  display: inline-block;
  margin-top: ${props => !props.first && "34px"};
  
  @media(max-height: 900px) {
      font-size: 5.6vw;
  }
`

const SubmitButton = styled.input`
  height: 54px;
  width: 81vw;
  max-width: 400px;
  
  margin-top: 122px;
  
  background: #FFE3D3;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border: 0;
  
  font-family: Roboto,serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  
  @media(max-height: 900px) {
    height: 7.5vh;
    
    position: absolute;
    bottom: 0;
    margin-bottom: 34px;
    
    font-size: 4.8vw;
  }
`

export const LoginForm = () => (
  <Form>
    <Label first htmlFor={"email"}>
      Email
    </Label>
    <Input id={"email"} type="text" placeholder={"Enter email..."}/>
    <Label htmlFor={"password"}>
      Password
    </Label>
    <Input id={"password"} type="text" placeholder={"Enter password..."}/>
    <SubmitButton type="submit" value={"Login"} />
  </Form>
)