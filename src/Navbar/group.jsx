import React from 'react'
import styled from 'styled-components'
import './styled1.css'


const Containergroup=styled('div')`
width:1106px;
height:53px;
background-color:white;
display: flex;
align-items: center;
justify-content:space-between;
`
const Title = styled('div')`
display:flex;
gap:1rem;
padding-right: 6rem;
`
const Title1 = styled('div')`

`
const Title2 = styled('div')`

`
const Group = () => {
   

  return (
    <Containergroup>
       <Title >
         <Title2 className='Scoot'>scoot</Title2>
         <Title2 className='About' >About</Title2>
         <Title2 className='About'>Location</Title2>
         <Title2 className='About'>Careers</Title2> 
       </Title>
       <Title></Title>
       <Title></Title>
        <Title1></Title1>
       <Title></Title>
        <Title1></Title1>
       <Title1></Title1>
       <Title1>
        <button className='batton'>Get Scootin</button>
       </Title1>
    </Containergroup>
  )
}

export default Group;