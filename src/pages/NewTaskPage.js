import React, {Fragment} from 'react'
import styled from 'styled-components'

import {Title} from "../components/Title";
import {NewTaskForm} from "../components/NewTaskForm";
import {useHistory} from "react-router-dom";

const TitleBlock = styled.div`
  @media(max-height: 900px), (max-width: 700px) {
    width: 81vw;
    max-width: 400px;
    display: flex;
    align-items: start;
  }
`

const NewTaskBlock = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 17vh auto 0;
  width: 16vw;
  min-width: 305px;
  
  @media(max-height: 900px), (max-width: 700px) {
    position: static;
    
    align-items: center;
    margin: 8vh auto;
    width: 81.8vw;
  }
`

const BackButton = styled.div`
  position: absolute;
  
  width: 81px;
  height: 81px;
  
  margin-left: 460px;
  top: -8px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 97px;
  
  color: #999999;
  font-weight: lighter;
  font-size: 40px;
  
  @media(min-width: 1920px) {
    margin-left: 24vw;
  }
  
  @media(max-height: 900px), (max-width: 700px) {
    display: none;
  }
`

export const NewTaskPage = () => {
  const history = useHistory()

  return (
    <Fragment>
      <NewTaskBlock>
        <TitleBlock>
          <Title title={"New task"}/>
        </TitleBlock>
        <NewTaskForm />
        <BackButton onClick={() => history.goBack()}>&times;</BackButton>
      </NewTaskBlock>
    </Fragment>
  )
}
