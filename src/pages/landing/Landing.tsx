import React, { ReactElement } from "react";
import { LandingStyled } from "./Landing.styles";
import { BaseDivider } from "components";

export const Landing = (): ReactElement => {
  return (
    <LandingStyled>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <BaseDivider plain>Text</BaseDivider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <BaseDivider orientation="left" plain>
        Left Text
      </BaseDivider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <BaseDivider orientation="right" plain>
        Right Text
      </BaseDivider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
    </LandingStyled>
  );
};
