import React from "react";
import { NaviBarButton, NaviBarContainer } from "./styles";

function NaviBar({pages, handlePage}) {

  return (
    <NaviBarContainer>
      {pages > 5
        ? <NaviBarButton onClick={() => handlePage(-5)}>{'<- Página anterior'}</NaviBarButton>
        : <div/>
      }
      <NaviBarButton onClick={() => handlePage(5)}>{'Página seguinte ->'}</NaviBarButton>
    </NaviBarContainer>
  )
}

export default NaviBar