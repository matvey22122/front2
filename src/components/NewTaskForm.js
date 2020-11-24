import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {ApiContext} from "../context/ApiContext";
import {adaptiveHeightMobile} from "../mixin";

const adaptiveWidthWeb = (min, full) => {
  return `calc(${min}px + ${full - min} * ((100vw - 850px) / (1920 - 850)))`
}

const Form = styled.form`
  margin-top: 7.4vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin-top: 18.4vh;
    align-items: start;
  }
`

const Label = styled.label` 
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 700;
  
  @media(min-height: 900px) and (min-width: 850px) {
    font-size: ${adaptiveWidthWeb(18, 21)};
  }
  
  @media(max-height: 900px), (max-width: 850px) {
    font-size: ${adaptiveHeightMobile(18, 21)};
  }
`

const TaskTextarea = styled.textarea`
  margin-top: 2.7vh;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border: 0;
  
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  color: #999999;
  
  box-sizing: border-box;
  
  resize: none;
  
  @media(min-height: 900px) and (min-width: 850px) {
    padding: ${adaptiveWidthWeb(13, 19)} ${adaptiveWidthWeb(15, 21)};
    height: ${adaptiveWidthWeb(90, 117)};
    font-size: ${adaptiveWidthWeb(10, 14)};
    line-height: ${adaptiveWidthWeb(12, 16)};
    width: ${adaptiveWidthWeb(270, 325)};
    border-radius: ${adaptiveWidthWeb(8, 10)};
  }
  
  @media(max-height: 900px), (max-width: 850px) {
    padding: ${adaptiveHeightMobile(13, 19)} ${adaptiveHeightMobile(15, 21)};
    height: ${adaptiveHeightMobile(90, 117)};
    font-size: ${adaptiveHeightMobile(10, 14)};
    line-height: ${adaptiveHeightMobile(12, 16)};
    width: ${adaptiveHeightMobile(270, 325)};
    border-radius: ${adaptiveHeightMobile(8, 10)};
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
  
  @media(min-height: 900px) and (min-width: 850px) {
    height: ${adaptiveWidthWeb(40, 54)};
    font-size: ${adaptiveWidthWeb(14, 18)};
    width: ${adaptiveWidthWeb(270, 325)};
    height: ${adaptiveWidthWeb(40, 54)};
    border-radius: ${adaptiveWidthWeb(8, 10)};
  }
  
  @media(max-height: 900px), (max-width: 850px) {
    position: absolute;
    bottom: 0;
    
    margin-bottom: ${adaptiveHeightMobile(20, 34)};
    height: ${adaptiveHeightMobile(40, 54)};
    font-size: ${adaptiveHeightMobile(14, 18)};
    border-radius: ${adaptiveHeightMobile(8, 10)};
  }
`

export const NewTaskForm = () => {
  const {addTask} = useContext(ApiContext)

  const [title, setTitle] = useState("")

  const history = useHistory()
  const createTask = event => {
    event.preventDefault()

    if (title.trim()) {
      if (addTask(title)) {
        history.push("/tasks")
      }
    }
  }
  return (
    <Form>
      <Label htmlFor={"taskName"}>
        Task name
      </Label>
      <TaskTextarea value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder={"Enter task name..."}
                    id={"taskName"}
      />
      <SubmitButton type="submit" value={"Create"} onClick={event => createTask(event)}/>
    </Form>
  )
}
