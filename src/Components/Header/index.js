import React from 'react';
import {
      HeaderContainer,
      HeaderImageBox,
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
          <HeaderImageBox>
              <HeaderImage>
                Ah negão!
              </HeaderImage>
          </HeaderImageBox>
          <Separator width={300}/>
          <HeaderBars>
              <HeaderMemeBar>
                Envie seu meme!
              </HeaderMemeBar>
              <HeaderAnnounceBar>
                Anunciar!
              </HeaderAnnounceBar>
              <HeaderAboutBar>
                Sobre!
              </HeaderAboutBar>
              <HeaderHighlightsBar>
                Destaques!
              </HeaderHighlightsBar>
              <HeaderSearchBar>
                olá!
              </HeaderSearchBar>
          </HeaderBars>
      </HeaderContainer>
  );
}

export default Header;