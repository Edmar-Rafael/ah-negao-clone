import dayjs from "dayjs";
import React from "react";
import { Separator } from "..";
import { Anchor, Date, Image, MemesContainer, MemesHeader } from "./styles";

function Memes({item}) {

  return (
    <>
      <MemesContainer>
        <MemesHeader>
          <Anchor>
            {item.title.rendered}
          </Anchor>
          <Date>
            {dayjs(item.date).format('DD/MM/YYYY')}
          </Date>
        </MemesHeader>
        <Image dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
      </MemesContainer>
      <Separator y={21}/>
    </>
  )
}

export default Memes