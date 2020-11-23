import React from "react";
import styled from 'styled-components'
import {adaptiveHeightMobile, getToday} from "../mixin";

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
    min-height: 100px;
  }
`

const TaskTitle = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  color: #323232;
  
  font-size: 21px;
  line-height: 25px;
  
  @media(max-height: 900px), (max-width: 850px) {
    font-size: ${adaptiveHeightMobile(14, 21)};
    line-height: ${adaptiveHeightMobile(16, 25)};
  }
`

const TaskDate = styled.div`
  margin-top: 6px;
  
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #C4C4C4;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin-top: ${adaptiveHeightMobile(4, 6)};
    font-size: ${adaptiveHeightMobile(10, 14)};
    line-height: ${adaptiveHeightMobile(12, 16)};
  }
`

const TextBlock = styled.div`
  margin: 16px 10px;
  
  @media(max-height: 900px), (max-width: 850px) {
    margin: ${adaptiveHeightMobile(10, 16)} ${adaptiveHeightMobile(8, 10)};
  }
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
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  
  color: #C3FEDA;
  
  @media(max-height: 900px), (max-width: 850px) {
    border-radius: ${adaptiveHeightMobile(2, 3)};
    height: ${adaptiveHeightMobile(30, 52)};
    font-size: ${adaptiveHeightMobile(7, 12)};
    line-height: ${adaptiveHeightMobile(9, 14)};
  }
`

export const Task = ({task, index, doneTask}) => (
  <TaskBlock index={index}>
    <TextBlock>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDate>{task.date || getToday()}</TaskDate>
    </TextBlock>
    <TaskButton onClick={() => doneTask(index)}>
      Done
    </TaskButton>
  </TaskBlock>
)
