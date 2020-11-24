import React, {Fragment, useContext} from 'react'
import styled from 'styled-components'
import {Task} from "../components/Task";

import {CompletedTasks} from "../components/CompletedTasks";
import {ApiContext} from "../context/ApiContext";
import {useHistory} from "react-router-dom";
import {adaptiveHeightMobile} from "../mixin";

const StyledTitle = styled.div`
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

const TasksBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  margin: 12.7vh auto 30px;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin: 7.7vh auto 0;
    align-items: start;
    padding: 0 9vw;
  }
`

const Tasks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  
  width: 54vw;
  
  margin-top: 82px;
  
  @media(max-height: 900px), (max-width: 850px) {
    display: flex;
    flex-direction: column;
    
    width: 81.8vw;
    margin-top: 6vh;
    margin-bottom: 15px;
  }
  
  @media(max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media(min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const AddButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  
  background: #F7F7F7;
  border-radius: 9px;
  border: 0;
  
  @media(max-height: 900px), (max-width: 850px) {
    position: fixed;
    right: 5.3vw;
    bottom: 4vh;
    
    display: flex;
    justify-content: center;
    
    width: ${adaptiveHeightMobile(27, 51)};
    min-height: auto;
    height: ${adaptiveHeightMobile(27, 51)};
    
    background: #FFE3D3;
    border-radius: ${adaptiveHeightMobile(14, 25)};
    border: 0;
  }
`

const Plus = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 700;
  color: #999999;
  
  font-size: 40px;
  line-height: 22px;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin: 0;
    color: #3C3C3C;
    font-size: ${adaptiveHeightMobile(22, 40)};
  }
`

const AddButtonTitle = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  
  margin-top: 26px;
  @media(max-height: 900px), (max-width: 850px) {
    display: none;
  }
`

export const TasksPage = () => {
  const {tasks, deleteTask} = useContext(ApiContext)

  const history = useHistory()
  const goToNewTask = () => {
    history.push("/new_task")
  }

  return (
    <Fragment>
      <TasksBlock>
        <StyledTitle>{"Tasks"}</StyledTitle>
        <Tasks>
          {tasks.map((task, i) => (
            <Task key={i} task={task} index={i} doneTask={deleteTask}/>
          ))}
          <AddButton onClick={() => goToNewTask()}>
            <Plus>+</Plus>
            <AddButtonTitle>Create new task</AddButtonTitle>
          </AddButton>
        </Tasks>
      </TasksBlock>
      <CompletedTasks />
    </Fragment>
  )
}
