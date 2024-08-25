import React from 'react'
import styled from 'styled-components'
import './styled7.css'

const Containers6 = styled('div')`
width:1440px;
height:445px;
background-color:#FFFFFF;
display:flex;
align-items: center;
justify-content: space-between;
`
const Titleg3 = styled('div')`

`
const Indexs4 = () => {
  return (
    <Containers6>
        <Titleg3>
            <div>  
                   <h5 className='zero'>Zero hassle <br /> payments</h5> <br />
                   <p className='zero1'>Our payment is as easy as one two three. We accept most <br /> credit cards and debit cards. You can also link your PayPal <br /> account inside the app. Need to pay later? No worries! You <br />can defer payment for up to a month.</p> <br />
                   <button className='batton4'>Learn More</button> 
            </div>
        </Titleg3>
        <Titleg3>
            <div className='moony'><img className='moony1' src="https://s3-alpha-sig.figma.com/img/a780/c6a7/75aa7e504d6554c904ee76dd3b26f696?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXsvwv53QCukL7A6Dd2e9uo5ypDEWVFcnKh3EOPfGNZ5XxzhTmz115cgWTXNQ3d-QoDErAzT6zyfv18wqVm~KiHPaDy7wc748WVwShWCdssPiBOVcXg2nkMoMRia3bOsdz~VRC6DYgx8I-2Pz75SdE1pzgIUZbOiu4I3gV06LPL~vDdCfXTvBvD9LXoO4iynkUvR-2HC6sA5ak6j4kPl9UA-e-Dzkc0zOiL1UWEbB-prEoVjTp45sLQT8FG1ZFOTShzrYtDRHlxvabkwDxdfyTI8rmdHJfgqU~F1DJFP00xcej5H3btWmp5UGqRBjAfmxPSJbEHYgXDqMUrb3XD5zA__" alt="" /></div>
        </Titleg3>
    </Containers6>
  )
}

export default Indexs4;