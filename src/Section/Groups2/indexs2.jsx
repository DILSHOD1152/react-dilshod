import React from 'react'
import styled from 'styled-components'
import './styled5.css'

const Containers4=styled('div')`
width: 1440px;
height: 650px;
background-color:#FFFFFF;
display:flex;
align-items: center;
justify-content: space-between;
`
const Titleg1 =styled('div')`

` 
const Indexs2 = () => {
  return (
    <Containers4>
        <Titleg1>
            <div><h4 className='Easy'>Easy to use <br />
            riding telemetry</h4> <br />
            <p className='app'>The Scoot app is available with riding telemetry. This means <br />it can show you your average speed, how long you've been <br />using the scooter, your traveling distance, and many more <br />things all in an easy to use app.</p>
            </div>
        </Titleg1>
        <Titleg1>
            <div className='kartina'><img className='kartina1' src="https://s3-alpha-sig.figma.com/img/d5e4/f74e/d6ec58aae7a2d66712467ebf964e6f8e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aURGQaeXEkVScWAb9Wfce0cs5CWjPRZJiQMxZKc~xVMIrwz2YkTCMbEqzHtqeGQ3uzty9C8VyLlO5Q25d4G9V9N0gk49O9t-7KaL~Y32ju7eC1tD0OeMVkBRWiz-ONqfzukjwOVYCMXqnZh9HysumjAnDh83fGCnnHmeK-cJS95~a97vF~sJFT3LFZ~lPcxnKlz5pUK-yKHDEqW2VF9i24mRJp~927Y47zm2E9Q5bpeDYru4063b0MyMo0vQlayXqwIbhKDzJSHMfteZHdzcs4g7RRfcpwSxA-kP3KJ7tyHK9CLxpRecAFWolUTL6N0dQlMmpX1FGSLO6nL3yTxdGg__" alt="" /></div>
        </Titleg1>
    </Containers4>
  )
}

export default Indexs2;