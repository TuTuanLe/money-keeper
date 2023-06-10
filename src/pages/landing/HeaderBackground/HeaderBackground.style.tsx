import styled from "styled-components";

const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 740px;
  width: 100%;
  margin: auto;
  background-color: #fafaff;
  z-index: -101;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 740px;
  width: 100%;
  max-width: 1290px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  clip-path: polygon(0 0, 75% 0, 40% 100%, 0 100%);
  z-index: -100;

  .pain-big {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    background-color: #5251f0;
    clip-path: polygon(63% 0, 53% 57%, 39% 86%, 24% 70%, 11% 78%, 0 100%, 0 0);
  }
  .pain-small {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    background-color: #5958f1;
    clip-path: polygon(51% 0, 35% 19%, 26% 23%, 17% 24%, 8% 49%, 0 60%, 0 0);
  }
`;
