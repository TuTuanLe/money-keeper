import styled from "styled-components";

const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const HeaderContainer = styled.header`
  /* Base */

  font-family: ${font};
  color: ${textColor};

  .wrapper {
    max-width: 1400px;
    margin: 0;
    padding-top: 0;
  }

  .container {
    max-width: 1290px;
    margin: 0 auto;
    padding: 15px;
    background-color: ${primaryColor};
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
