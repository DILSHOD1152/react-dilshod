import React from 'react'
import styled from 'styled-components'
import './styled6.css'

const Containers5=styled('div')`
width:1440px;
height:445px;
background-color:#FFFFFF;
display:flex;
align-items: center;
justify-content: space-between;
`
const Titleg2=styled('div')`

`
const Indexs3 = () => {
  return (
    <Containers5>
        <Titleg2>
            <div className='manzara'><img className='manzara1' src="https://s3-alpha-sig.figma.com/img/eca0/fa92/052282c43801ffcc9ad425c08b740148?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFNC3nTKXk95j6~YfbhQOPyS7beBeSgHKa4WjRkoHcd-eDpSqtkYKLf0A6NRcKPuo4m3-Rgom76mLSqgFbVgfxI4varEuDbwM7l5HGAi~ZASaKllJrFO7jqBcLo-UuXbYFbBHtMDWK~yCJmvQw-1gHvvTqLYzZvGUwdp7J0Poh9Vtr18MMKfCMYMrkGAFlegLPXIvrGh5OE1VzENW0EcN6aG4VvDVXCLJqRVO4lNyudLx70tfnKQH6itXTl~vpZRC5GyIQ~MP2Ns6BsbNmPsnn4qCMd3~acJDFIjdzvI1-y39PG3zj8FAt4Ru59zThUrzTVWH-i0-ZOnU2kzIZx86A__" alt="" /></div>
        </Titleg2>
        <Titleg2><h5 className='coming'>Coming to a city <br />near you</h5> <br />
                  <p className='coming1'>Scoot is available in 4 major cities so far. We’re expanding <br /> rapidly, so be sure to let us know if you want to see us in <br />your hometown. We’re aiming to let our scooters loose on 23 <br />cities over the coming year.</p> <br />
                  <button className='batton3'>Learn More</button>
        </Titleg2>
    </Containers5>
  )
}

export default Indexs3;