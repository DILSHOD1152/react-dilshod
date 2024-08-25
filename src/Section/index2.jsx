import React from 'react'
import styled from 'styled-components';
import Indexs from './Groups/indexs';
import Indexs1 from './Groups1/indexs1';
import Indexs2 from './Groups2/indexs2';
import Indexs3 from './Groups3/indexs3';
import Indexs4 from './Groups4/indexs4';

 const ContainerS1=styled('div')`
 width:1440px;
 height:2900px;
 
 `
const Section = () => {
  return (
    <ContainerS1> 
       <Indexs/> <br /><br />
       <Indexs1/> <br /> <br /> <br />
       <Indexs2/> <br /> <br /> <br />
       <Indexs3/> <br /><br /> <br />
       <Indexs4/>
    </ContainerS1>
  )
}

export default Section;