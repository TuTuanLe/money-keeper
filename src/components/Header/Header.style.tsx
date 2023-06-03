import styled from "styled-components";

const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const BackgroundImage = styled.div`
  position: relative;
  background-color: ${primaryColor};
  clip-path: polygon(0 0, 100% 0%, 78% 99%, 0% 100%);
  height: 750px;
  top: -100px;
  margin-right: 600px;
  z-index: -1;
`;

export const HeaderContainer = styled.header`
  /* Base */

  font-family: ${font};
  color: ${textColor};

  body {
    line-height: 1;
    font-family: $font;
    color: $text-color;
    font-weight: 400;
    background-color: white;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-family: $font;
  }

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

  /* Body */

  .header {
    line-height: 1;
    font-family: ${font};
    color: ${textColor};
    font-weight: 200;
  }

  /* Header */

  .header {
    padding-top: 37px;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-auth {
      display: flex;
      align-items: center;
      gap: 0 14px;
    }
    &-signin {
      font-weight: 400;
      color: ${headingColor};
    }
  }

  .menu {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0 8px;
    &-link {
      color: #eeeeee;
    }
  }
`;
