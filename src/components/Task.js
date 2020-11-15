import React from "react";
import styled from 'styled-components'

const TaskBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 150px;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 9px;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin-left: ${props => props.index % 2 === 0 ? '0' : 'auto'};
    
    width: 48vw;
  }
`

const TaskTitle = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #323232;
`

const TaskDate = styled.div`
  height: 16px;
  
  margin-top: 6px;
  
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #C4C4C4;
`

const TextBlock = styled.div`
  margin: 16px 10px;
`

const TaskButton = styled.button`
  height: 52px;
  
  margin: 0 10px 10px;
  
  background: #FFFFFF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  border: 0;
  
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  
  color: #C3FEDA;
`

export const Task = ({task, index, doneTask}) => (
  <TaskBlock index={index}>
    <TextBlock>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDate>{task.date}</TaskDate>
    </TextBlock>
    <TaskButton onClick={() => doneTask(index)}>
      Done
    </TaskButton>
  </TaskBlock>
)