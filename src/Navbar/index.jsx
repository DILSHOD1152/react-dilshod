import React from 'react'
import styled from 'styled-components'
import Group from './group'

const Container =styled('div')`
width:1440px;
height:96px;
background-color:#FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`
const Navbar = () => {
  return (
    <Container>
       <Group/>

    </Container>
       
   
  )
}

export default Navbar;