import React, {useContext} from "react";
import styled from 'styled-components'
import {ApiContext} from "../context/ApiContext";

const CompletedBlock = styled.div`
  position: absolute;
  height: 48px;
  right: 0;
  top: 13.1vh;
  
  padding: 0 21px 0 24px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: #FFE3D3;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  border-radius: 13px 0px 0px 13px;
  border: 0;
  
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  
  color: #323232;
  
  @media(max-height: 900px) or (max-width: 850px) {
    padding: 0 25px;
  }
`

const CompletedText = styled.span`
  @media(max-width: 900px) {
    display: none;
  }
`

export const CompletedTasks = () => {
  const {tasks} = useContext(ApiContext)
  return (
    <CompletedBlock>
      <CompletedText>Completed tasks:&nbsp;</CompletedText>{tasks.length}
    </CompletedBlock>
  )
}
