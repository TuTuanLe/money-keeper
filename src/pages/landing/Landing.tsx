import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import { Header } from "./Header";
import { Content } from "./Content";
import { HeaderBackground } from "./HeaderBackground/HeaderBackground";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled>
      <Header></Header>
      <Content></Content>
      <HeaderBackground></HeaderBackground>
    </LandingStyled>
  );
};
