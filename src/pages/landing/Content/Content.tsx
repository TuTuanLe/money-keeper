import React, { ReactElement } from "react";
import { ContentContainer } from "./Content.Style";
import Icon, { StarFilled, StarOutlined } from "@ant-design/icons";

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
                  <div className="hero-intro1-image-container">
                    <h2 className="hero-intro1-name">Lucy</h2>
                    <div className="hero-intro1-image">
                      <img srcSet={srcSet} alt="" />
                    </div>
                  </div>
                  <div className="hero-intro1-desc">
                    <p className="hero-intro1-desc-progress">Done</p>
                    <p className="hero-intro1-desc-name">Lucy Niana</p>
                    <p className="hero-intro1-desc-status">
                      Develop Communication Plan
                    </p>
                    <div className="hero-intro1-desc-icon">
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#CCCCCC" }} />
                    </div>
                  </div>
                </div>
                <div className="hero-intro2">
                  <div className="hero-intro2-image-container">
                    <h2 className="hero-intro2-name">Mark</h2>
                    <div className="hero-intro2-image">
                      <img srcSet={srcSet2} alt="" />
                    </div>
                  </div>
                  <div className="hero-intro2-desc">
                    <p className="hero-intro2-desc-progress">Pending</p>
                    <p className="hero-intro2-desc-name">Mark Anderson</p>
                    <p className="hero-intro2-desc-status">
                      Develop Communication Plan
                    </p>
                    <div className="hero-intro1-desc-icon">
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                      <StarFilled style={{ color: "#FFCD1A" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentContainer>
    </React.Fragment>
  );
};
