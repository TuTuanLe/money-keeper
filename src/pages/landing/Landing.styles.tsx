import styled from "styled-components";
const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const LandingStyled = styled.div``;

export const Header = styled.div`
  /* Base */
  position: relative;
  font-family: ${font};
  color: ${textColor};

  .wrapper {
    max-width: 1400px;
    margin: auto;
    padding-top: 0;
  }

  .container {
    max-width: 1290px;
    margin: 0 auto;
    padding: 15px;
  }
`;
