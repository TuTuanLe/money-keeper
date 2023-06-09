import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import { Header } from "./Header";
import { Content } from "./Content";
import { BackgroundImage } from "./Header/Header.style";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled>
      <Header></Header>
      <Content></Content>
      <BackgroundImage></BackgroundImage>
    </LandingStyled>
  );
};
