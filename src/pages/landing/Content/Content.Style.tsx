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
      margin-bottom: 200px;
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
        border-radius: 14px;
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
    max-width: 1290px;
    margin-top: 50px;
  }

  .developed-by {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 124px;
    &-title {
      font-size: 24px;
      line-height: 34px;
      letter-spacing: 2%;
      color: #515151;
    }
    &-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        margin-left: 50px;
      }
    }
  }

  .features-heading {
    font-family: "Nunito Sans";
    font-style: normal;
    font-size: 36px;
    font-weight: 550;
    line-height: 27px;
    letter-spacing: 2%;
    color: #565656;

    margin-bottom: 84px;
    em {
      color: #ffca1d;
      font-style: normal;
    }
  }

  .features-plan {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 114px;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 24px;
      div {
        height: 78px;
        width: 78px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 30px;
        background-color: #fed369;
        color: #ffffff;

        margin-bottom: 46px;
      }

      &-title {
        font-size: 18px;
        line-height: 28px;
        line-height: 2%;
        align-content: center;
        color: #2b3377;

        margin-bottom: 30px;
      }

      &-desc {
        font-size: 15px;
        line-height: 26px;
        text-align: center;
        color: #585858;
      }
    }
  }

  .feature-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 164px;
    &-cycle {
      position: relative;
      content: "";
      width: 516px;
      height: 516px;
      width: 50%;
      height: 100%;
      &-line-1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 222px;
        height: 222px;
        border-radius: 50%;
        border: 1.4px solid #d7d7eb;
      }
      &-line-2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 384px;
        height: 384px;
        border-radius: 50%;
        border: 1.4px solid #d7d7eb;
      }
      &-line-3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 516px;
        height: 516px;
        border-radius: 50%;
        border: 1.4px solid #d7d7eb;
      }
    }
    &-content {
      margin-left: 48px;
      width: 50%;
      height: 100%;

      &-header {
        width: 464px;
        height: 92px;
        margin-bottom: 30px;

        font-size: 30px;
        line-height: 44px;
        letter-spacing: 2%;
        color: #4a4a4a;
      }
      &-text {
        width: 522px;
        height: 120px;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0.5%;
        color: #575757;
      }
    }
  }
`;
