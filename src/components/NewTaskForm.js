import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {ApiContext} from "../context/ApiContext";

const Form = styled.form`
  margin-top: 7.4vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
   @media(max-height: 900px), (max-width: 700px) {
    margin-top: 18.4vh;
    align-items: start;
  }
`

const Label = styled.label` 
  font-family: Roboto,serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
`

const TaskTextarea = styled.textarea`
  height: 117px;
  width: 81vw;
  max-width: 400px;
  
  margin-top: 2.7vh;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border: 0;
  
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
  
  box-sizing: border-box;
  padding: 19px 21px;
  
  resize: none;
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
  
  @media(max-height: 900px), (max-width: 700px) {
    position: absolute;
    bottom: 0;
    margin-bottom: 34px;
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