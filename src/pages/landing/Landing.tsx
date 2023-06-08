import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import { Header } from "./Header";
import { Content } from "./Content";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled>
      <Header></Header>
      <Content></Content>
    </LandingStyled>
  );
};
