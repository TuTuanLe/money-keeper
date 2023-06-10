import styled from "styled-components";

const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-top: 0;
`;

export const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  top: 0;
  @media (max-width: 930px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;
export const HeaderContainer = styled.header`
  /* Base */
  position: relative;
  font-family: ${font};
  color: ${textColor};
  padding-top: 20px;
  padding-bottom: 80px;

  body {
    line-height: 1;
    font-family: ${font};
    color: ${textColor};
    font-weight: 400;
    background-color: white;
  }

  button {
    max-width: 1400;
    cursor: pointer;
    outline: none;
    border: none;
    font-family: ${font};
  }

  /* Header */
  line-height: 1;
  font-family: ${font};
  color: ${textColor};
  font-weight: 400;

  .header {
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
      color: #ffffff;
    }
    &-iconless {
      color: #ffffff;
    }
    &-item {
      padding-right: 16px;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .header-auth {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .signin {
    color: ${headingColor};
    margin-right: 16px;
  }
  .signup {
    color: ${headingColor};
    padding: 12px 32px;
    border-radius: 8px;
    background-color: #ffca1d;
  }
`;
