import React from 'react';  
import dayjs from 'dayjs'
import Line from '../Line';
import Separator from '../Separator';
import { 
      ImageContainer,
      MemesContainer,
      MemesHeader,
      DateContainer
     } from './styles';


function Memes({item}) {
  return (
    <>
      <MemesContainer >
         <MemesHeader>
            <DateContainer>
              {dayjs(item.date).format('DD/MM/YYYY')}
            </DateContainer>
            <Line width={843.3} color={'#bdb6b6'}/>
         </MemesHeader>
         <ImageContainer/>
      </MemesContainer>
      <Separator height={10}/>
    </>
  );
}

export default Memes