import React from 'react';
import {
      HeaderContainer,
      HeaderImage,
      HeaderBars,
      HeaderMemeBar,
      HeaderAnnounceBar,
      HeaderAboutBar,
      HeaderHighlightsBar,
      HeaderSearchBar
    } from './styles';
import { Separator } from "../../Components"


function Header() {
  return (
      <HeaderContainer>
          <HeaderImage/>
          <Separator width={235}/>
          <HeaderBars>
              <HeaderMemeBar>
                Envie seu meme
              </HeaderMemeBar>
              <Separator width={38}/>
              <HeaderAnnounceBar>
                Anunciar
              </HeaderAnnounceBar>
              <Separator width={38}/>
              <HeaderAboutBar>
                Sobre
              </HeaderAboutBar>
              <Separator width={38}/>
              <HeaderHighlightsBar>
                Destaques
              </HeaderHighlightsBar>
              <Separator width={38}/>
              <HeaderSearchBar>
                olá
              </HeaderSearchBar>
          </HeaderBars>
      </HeaderContainer>
  );
}

export default Header;