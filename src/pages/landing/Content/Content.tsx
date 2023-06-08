import React, { ReactElement } from "react";
import { ContentContainer } from "./Content.Style";

import logo2x from "../img/image1.png";
import logo2x2 from "../img/image2.png";

import { GlobalStyles } from "../GlobalStyles/GlobalStyle.style";

export const Content = (): ReactElement => {
  const srcSet = ` ${logo2x} 2x`;
  const srcSet2 = `${logo2x2} 2x`;

  return (
    <React.Fragment>
      <GlobalStyles />
      <ContentContainer>
        <section className="hero">
          <div className="container">
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-heading">👋 Welcome to TeamFlow</div>
                <h1 className="hero-text">Ứng dụng quản lí chi tiêu</h1>
                <p className="hero-desc">tạo và phát triển tiện dụng </p>
                <a href="#" className="hero-button">
                  Bất Đầu
                </a>
              </div>
              <div className="hero-item">
                <div className="hero-intro1">
                  <h2 className="hero-intro1-name">Lucy</h2>
                  <img srcSet={srcSet} alt="" className="hero-intro1-image" />
                  <p className="hero-intro1-desc"></p>
                  <p className="hero-intro1-desc"></p>
                </div>
                <div className="hero-intro2">
                  <h2 className="hero-intro2-name">Mark</h2>
                  <img srcSet={srcSet2} alt="" className="hero-intro2-image" />
                  <p className="hero-intro1-desc">
                    Cập nhật thông tin chi tiêu{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentContainer>
    </React.Fragment>
  );
};
