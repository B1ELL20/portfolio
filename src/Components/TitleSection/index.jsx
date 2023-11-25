import React from 'react'
import { Title } from './TitleSectionElements'

const TitleSection = ({ text, color }) => {
  
  return (

    <Title color={color}>{text}</Title>
  )
}

export default TitleSection