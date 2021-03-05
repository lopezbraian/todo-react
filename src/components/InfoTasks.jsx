import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../ThemeContext'

const ContainerInfo = styled.div`
  padding:5px 15px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  p {
    color : ${props => props.modeDark ? ('white') : ('black') };
    font-size:.9rem;
  }
  color : var(--light-theme-Dark-Grayish-Blue);
`
export const InfoTasks = ({total}) => {
  const modeDark = useThemeContext();
  return (
    <ContainerInfo modeDark = {modeDark.mode()} >
      <p>{total} items left</p>
      <p>Clear Complete</p>
    </ContainerInfo>
  )
}