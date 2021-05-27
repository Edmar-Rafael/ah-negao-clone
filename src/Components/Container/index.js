import React from 'react';
import { BigBox } from './styles';
import { 
      Header,
      Separator,
      Memes
     } from '../../Components'


function Container() {
  return (
    <BigBox>
        <Header/>
        <Separator height={25}/>
        <Memes>
          
        </Memes>
    </BigBox>
  )
}

export default Container