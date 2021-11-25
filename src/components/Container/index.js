import React from "react";
import { BodyBox } from "./styles";

function Container({children}) {

  return (
    <BodyBox>
      {children}
    </BodyBox>
  )
}

export default Container