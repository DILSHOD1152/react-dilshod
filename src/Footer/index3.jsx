import React from 'react'
import styled from 'styled-components'
import Footery from './yuqori'
import Footerp from './past'

const ContainerF=styled('div')`
width:1440px;
height:396px;
background-color:brown;
`
const Footer = () => {
  return (
    <ContainerF>
       <Footery/>
       <Footerp/>
    </ContainerF>
  )
}

export default Footer;