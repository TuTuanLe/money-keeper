import styled from "styled-components";

const font = "Nunito Sans, sans-serif";
const textColor = "#575757";
const headingColor = "#4a4a4a";
const primaryColor = "#4b4aef";

export const BackgroundImage = styled.div`
  position: relative;
  top: -100px;
  left: -30px;
  height: 850px;
  max-width: 1400px;
  margin: auto; /* Thêm thuộc tính margin: auto để căn giữa */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  clip-path: polygon(0 0, 85% 0, 40% 100%, 0 100%);
  z-index: -1;

  .pain-big {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    background-color: #5251f0;
    clip-path: polygon(63% 0, 53% 57%, 39% 86%, 24% 70%, 11% 78%, 0 100%, 0 0);
  }
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-top: 0;
`;

export const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 15px;
`;
export const HeaderContainer = styled.header`
  /* Base */
  position: relative;
  font-family: ${font};
  color: ${textColor};
  padding-top: 37px;

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
  font-weight: 200;

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
  }
  .signup {
    color: ${headingColor};
  }
`;
