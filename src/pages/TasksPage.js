import React, {Fragment, useContext} from 'react'
import styled from 'styled-components'
import {Title} from "../components/Title";
import {Task} from "../components/Task";

import plus_large from '../assets/plus_large.png'
import plus_small from '../assets/plus_small.png'
import {CompletedTasks} from "../components/CompletedTasks";
import {ApiContext} from "../context/ApiContext";
import {useHistory} from "react-router-dom";

const TasksBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  margin: 12.7vh auto 0;
  
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
  height: 150px;
  
  background: #F7F7F7;
  border-radius: 9px;
  border: 0;
  
  @media(max-height: 900px), (max-width: 850px) {
    position: fixed;
    right: 5.3vw;
    bottom: 4vh;
    
    display: flex;
    justify-content: center;
    
    width: 51px;
    height: 51px;
    
    background: #FFE3D3;
    border-radius: 25px;
    border: 0;
  }
`

const Plus = styled.div`
  height: 23px;
  width: 21px;
  
  background-image: url("${plus_large}");
  
  margin-top: 42px;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin: 0;  
    height: 18px;
    width: 19px;
    background-image: url("${plus_small}");
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
        <Title title={"Tasks"} />
        <Tasks>
          {tasks.map((task, i) => (
            <Task key={i} task={task} index={i} doneTask={deleteTask}/>
          ))}
          <AddButton onClick={() => goToNewTask()}>
            <Plus />
            <AddButtonTitle>Create new task</AddButtonTitle>
          </AddButton>
        </Tasks>
      </TasksBlock>
      <CompletedTasks />
    </Fragment>
  )
}
