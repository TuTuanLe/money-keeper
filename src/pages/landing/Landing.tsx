import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import { Header } from "./Header";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled>
      <Header></Header>
    </LandingStyled>
  );
};
