import React from 'react'
import styled from 'styled-components'
import './styled3.css'

const Containers2=styled('div')`
width:1440px;
height:650px;
background-color:#FFFFFF;
`

const Titles=styled('div')`


`
const Indexs = () => {
  return (
    <Containers2>
        <Titles>
            <div className='moto'>
               <h5 className='scooter'>Scooter sharing <br /> made simple</h5> 
               <p className='The'> Scoot takes the hassle out of urban mobility. Our bikes <br /> are placed in convenient locations in each of our cities. <br /> Use our app to locate the nearest bike, unlock it with a <br />
                  tap, and you’re away!</p>
               <button className='battom1'>Get Scootin</button>
             </div>
        </Titles>
    </Containers2>
  )
}

export default Indexs;