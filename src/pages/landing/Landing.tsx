import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import Header from "../../components/Header/Header";
// import { BaseGlobal } from "../../components";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled className="landing-page">
      <Header />
    </LandingStyled>
  );
};
