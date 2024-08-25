import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Containerp = styled('div')`
display: flex;
align-items: center;
justify-content: space-between;
background-color:#333A44;
width:1440px;
height:96px;
`
const Titlep=styled('div')`
display:flex;
text-align: center;
align-items: center;
`
const Footerp = () => {
  return (
    <Containerp>
       <Titlep>
        <div className='salc'>
          <h5 className='scsc'>scoot</h5>
          <p>About</p>
          <p>Location</p>
          <p>Careers</p>
        </div>
       </Titlep>
       <Titlep></Titlep>
       <Titlep>
         <div className='mesejer'> <BsFacebook/> <BsTwitter/> <BsInstagram/> </div>
       </Titlep>
    </Containerp>
  )
}

export default Footerp;