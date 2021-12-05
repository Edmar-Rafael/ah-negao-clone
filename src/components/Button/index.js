import React from "react";
import { ButtonContainer } from "./styles";

function Button({children, text}) {

  return (
    <ButtonContainer>
      {text} {children}
    </ButtonContainer>
  )
}

export default Button