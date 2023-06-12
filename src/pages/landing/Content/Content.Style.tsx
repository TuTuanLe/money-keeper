import styled from "styled-components";

export const ContentContainer = styled.main`
  max-width: 1290px;
  margin: auto;
  padding-top: 0;

  .hero {
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1290px;
    }
    &-content {
      width: 100%;
      max-width: 520px;
    }
    &-item {
      display: flex;
      flex-direction: column;
    }
  }
  .hero {
    &-intro1 {
      display: flex;
      align-items: center;
      &-image {
        width: 200px;
        height: 216px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #e9eaf6;
        position: relative;
        z-index: -3;
      }
      &-image::before {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 5px dashed black;
        border-radius: 50%;
      }
      &-image img {
        width: 130px;
        height: 192px;
        object-fit: contain;
        margin: 26px auto;
      }
      &-name {
        color: #494949;
        font-weight: 500;
        position: absolute;
        border-radius: 28px;
        bottom: 24px;
        left: -80px;
        padding: 8px 60px;
        background-color: #fafafa;
      }
      &-desc {
        position: relative;
        padding: 0 20px;
        margin-left: 18px;
        width: 286px;
        height: 130px;
        background-color: #ffffff;
        &-progress {
          position: absolute;
          right: 0;
          top: 0;
          padding: 3px 12px;
          color: #ffffff;
          background-color: #3adad9;
          border-radius: 5px;
        }
        &-name {
          margin-top: 30px;

          color: #6c71a1;
          font-size: 15px;
          font-weight: 400;
        }
        &-status {
          color: #2b3377;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    &-intro2 {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-right: 100px;
      margin-top: 16px;
      &-image {
        width: 148px;
        height: 148px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #4b4aef;
        position: relative;
        z-index: -3;
      }
      &-image img {
        width: 130px;
        height: 192px;
        object-fit: contain;
        margin: auto;
      }
      &-name {
        color: #279e73;
        font-size: 16px;
        font-weight: 400;
        position: absolute;
        border-radius: 15px;
        bottom: 74px;
        right: -80px;
        padding: 8px 40px;
        background-color: #fafafa;
      }
      &-desc {
        position: relative;
        padding: 0 20px;
        margin-left: 18px;
        width: 286px;
        height: 130px;
        background-color: #ffffff;
        &-progress {
          position: absolute;
          right: 0;
          top: 0;
          padding: 3px 12px;
          color: #ffffff;
          background-color: #fd9b79;
          border-radius: 5px;
        }
        &-name {
          margin-top: 30px;
          color: #6c71a1;
          font-size: 15px;
          font-weight: 400;
        }
        &-status {
          color: #2b3377;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }

  .hero {
    &-content {
    }
    &-heading {
      display: inline-block;
      font-size: 16px;
      color: #606060;

      background-color: #ffffff;
      padding: 9px 20px;
      border-radius: 8px;
      box-shadow: 1.4px 1.4px 9px rgba(38, 40, 82, 0.1);
    }
    &-text {
      font-size: 50px;
      line-height: 60px;
      letter-spacing: 2%;
      color: #ffffff;

      margin: 12px 12px 12px 0px;
    }
    &-minitext {
      font-size: 22px;
      line-height: 36px;
      letter-spacing: 2%;
      color: #ffffff;

      margin: 30px 0;
    }
    &-button {
      font-size: 20px;
      line-height: 24px;
      color: #2c2c2c;

      padding: 14px 34px;
      border-radius: 8px;
      background-color: #ffca1d;
    }
  }

  .hero-intro1-image-container {
    position: relative;
  }
  .hero-intro2-image-container {
    position: relative;
  }

  /* features */

  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
  }

  .developed-by-logo img {
    color: black;
  }
`;
