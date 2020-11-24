import React, {Fragment} from 'react'
import styled from 'styled-components'
import {NewTaskForm} from "../components/NewTaskForm";
import {useHistory} from "react-router-dom";
import {adaptiveHeightMobile, adaptiveWidthWeb} from "../mixin";

const StyledTitle = styled.div`
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  
  @media(min-height: 900px) and (min-width: 850px) {
    font-size: ${adaptiveWidthWeb(30, 48)};
  }
  
  @media(max-height: 900px), (max-width: 850px) {
    font-size: ${adaptiveHeightMobile(30, 48)};
  }
`

const TitleBlock = styled.div`
  @media(max-height: 900px), (max-width: 850px) {
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
  
  @media(max-height: 900px), (max-width: 850px) {
    position: static;
    
    align-items: center;
    margin: 8vh auto;
    width: 81.8vw;
  }
`

const BackButton = styled.div`
  position: absolute;

  top: -8px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 1px solid #999999;
  box-sizing: border-box;
  
  color: #999999;
  font-weight: lighter;
  
  @media(min-height: 900px) and (min-width: 850px) {
    margin-left: ${adaptiveWidthWeb(350, 480)};
    border-radius: ${adaptiveWidthWeb(80, 97)};
    font-size: ${adaptiveWidthWeb(30, 40)};
    border-radius: ${adaptiveWidthWeb(60, 97)};
    width: ${adaptiveWidthWeb(55, 81)};
    height: ${adaptiveWidthWeb(55, 81)};
  }
  
  @media(max-height: 900px), (max-width: 850px) {
    display: none;
  }
`

export const NewTaskPage = () => {
  const history = useHistory()

  return (
    <Fragment>
      <NewTaskBlock>
        <TitleBlock>
          <StyledTitle>New task</StyledTitle>
        </TitleBlock>
        <NewTaskForm />
        <BackButton onClick={() => history.goBack()}>&times;</BackButton>
      </NewTaskBlock>
    </Fragment>
  )
}
