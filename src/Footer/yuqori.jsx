import React from 'react'
import styled from 'styled-components'
import './styledf.css'
import { DiApple } from 'react-icons/di'
import { IoShapes } from "react-icons/io5";

const ContainerF1=styled('div')`
width:1440px;
height:300px;
background-color:#495567;
display:flex;
align-items: center;
justify-content: space-between;
`
const Titlef =styled('div')`
display:flex;
display:flex;
align-items: center;
gap:1rem;
`
const Footery = () => {
  return (
    <ContainerF1>
        <Titlef> 
            <div>
                <h5 className='sign'>Sign up and <br />Scoot off today</h5>
            </div>
        </Titlef>
        <Titlef>
            <div className='appstore'>
                <div ><DiApple size={30}/></div>
                <p>Available on the <br /><h6 className='appstore1'>AppStore  </h6> </p> 
                
            </div>
            <div className='googleplay'> <IoShapes size={30}/> 
              <p>Get it on <h5 className='appstore1'>GooglePlay</h5></p>
            </div>
        </Titlef>
    </ContainerF1>
  )
}

export default Footery;