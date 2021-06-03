import React from 'react';
import Separator from '../Separator';
import { MemesContainer } from './styles';


function Memes({children}) {
  return (
    <>
      <MemesContainer >
      {children}
    </MemesContainer>
    <Separator height={10}/>
    </>
  );
}

export default Memes