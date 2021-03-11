import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../ThemeContext'
import { useTasksContext } from '../TaskContext'

const ContainerInfo = styled.div`
  padding:5px 15px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  p {
    cursor: pointer;
    color : ${props => props.modeDark ? ('white') : ('black') };
    font-size:.9rem;
  }
  color : var(--light-theme-Dark-Grayish-Blue);
`
export const InfoTasks = ({total}) => {
  const modeDark = useThemeContext();
  const tasksContext = useTasksContext();

  const clearComplete = () => {
    tasksContext.clearComplete()
  }
  
  return (
    <ContainerInfo modeDark = {modeDark.mode()} >
      <p>{total} items left</p>
      <p onClick={clearComplete}>Clear Complete</p>
    </ContainerInfo>
  )
}