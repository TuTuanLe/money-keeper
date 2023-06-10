import React, { ReactElement } from "react";
import { BackgroundWrapper, BackgroundImage } from "./HeaderBackground.style";

export const HeaderBackground = (): ReactElement => {
  return (
    <BackgroundWrapper>
      <BackgroundImage>
        <div className="pain-big"></div>
        <div className="pain-small"></div>
      </BackgroundImage>
    </BackgroundWrapper>
  );
};

export default HeaderBackground;
