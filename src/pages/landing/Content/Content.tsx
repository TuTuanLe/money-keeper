import React, { ReactElement } from "react";
import { ContentContainer } from "./Content.Style";
import Icon, { StarFilled, StarOutlined } from "@ant-design/icons";

import { IconContext } from "react-icons";
import { BsGraphUpArrow } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiPresentationChartBar } from "react-icons/hi";
import { GiTeamIdea } from "react-icons/gi";

import logo2x from "../img/image1.png";
import logo2x2 from "../img/image2.png";
import logo1 from "../img/features-image1.png";
import logo2 from "../img/features-image2.png";
import logo3 from "../img/features-image3.png";
import logo4 from "../img/features-image4.png";
import ellipse from "../img/Ellipse.png";
import ellipse1 from "../img/Ellipse (1).png";
import ellipse2 from "../img/Ellipse (2).png";
import ellipse3 from "../img/Ellipse (3).png";
import charge from "../img/fast-charge 1.png";

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
                <p className="hero-heading">👋 Welcome to TeamFlow</p>
                <h1 className="hero-text">Ứng dụng quản lí chi tiêu</h1>
                <p className="hero-minitext">tạo và phát triển tiện dụng </p>
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
        <section className="features">
          <div className="developed-by">
            <h2 className="developed-by-title">Được phải triển bởi cá nhân </h2>
            <div className="developed-by-logo">
              <div
                style={{
                  width: "87px",
                  height: "71px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${logo1})`,
                }}
              />
              <div
                style={{
                  width: "120.64px",
                  height: "82.46px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${logo2})`,
                }}
              />
              <div
                style={{
                  width: "97.74px",
                  height: "72.54px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${logo3})`,
                }}
              />
              <div
                style={{
                  width: "104.6px",
                  height: "72.54px",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${logo4})`,
                }}
              />
            </div>
          </div>
          <div className="features-heading">
            What you <em>can do?</em>
          </div>
          <div className="features-plan">
            <div className="features-plan-item">
              <div style={{ backgroundColor: "#3ADAD9" }}>
                <BsGraphUpArrow />
              </div>
              <h3 className="features-plan-item-title">Kế hoạch quản lí </h3>
              <p className="features-plan-item-desc">
                Kế hoạch kinh doanh của chúng tôi là một tài liệu bằng văn bản
                mô tả các hoạt động kinh doanh cốt lõi của công ty.
              </p>
            </div>
            <div className="features-plan-item">
              <div>
                <FcIdea style={{ color: "#ffffff" }} />
              </div>
              <h3 className="features-plan-item-title">Kế hoạch tài chính </h3>
              <p className="features-plan-item-desc">
                Đội ngũ chuyên gia của chúng tôi đưa ra quyết định hợp lý về
                tiền bạc của họ, để đảm bảo họ đạt được các mục tiêu trong cuộc
                sống. Một kế hoạch tài chính.
              </p>
            </div>
            <div className="features-plan-item">
              <div style={{ backgroundColor: "#FD9B79" }}>
                <RxMagnifyingGlass />
              </div>
              <h3 className="features-plan-item-title">Thống Kê </h3>
              <p className="features-plan-item-desc">
                Phân tích thị trường là một đánh giá định lượng và định tính của
                một thị trường. Nó nhìn vào kích thước của thị trường.
              </p>
            </div>
          </div>
          <div className="features-heading">
            Những <em>Tính năng</em>
          </div>
          <div className="feature-container">
            <div className="feature-container-cycle">
              <div className="feature-container-cycle-item">
                <div className="cycle-item">
                  <div
                    className="cycle-item-img-center"
                    style={{
                      width: "74px",
                      height: "74px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${ellipse})`,
                    }}
                  />
                  <div
                    className="cycle-item-img-1"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${ellipse1})`,
                    }}
                  />
                  <div
                    className="cycle-item-img-2"
                    style={{
                      width: "62px",
                      height: "62px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${ellipse2})`,
                    }}
                  />
                  <div
                    className="cycle-item-img-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${ellipse3})`,
                    }}
                  />
                  <div className="cycle-item-icon">
                    <IconContext.Provider
                      value={{ color: "blue", size: "4rem", className: "" }}
                    >
                      <div>
                        <HiPresentationChartBar />
                      </div>
                    </IconContext.Provider>

                    <GiTeamIdea />
                  </div>
                </div>
              </div>
              <div className="feature-container-cycle-line-1"></div>
              <div className="feature-container-cycle-line-2"></div>
              <div className="feature-container-cycle-line-3"></div>
            </div>
            <div className="feature-container-content">
              <h2 className="feature-container-content-header">
                Quản lí mọi thứ trong một không gian làm việc
              </h2>
              <p className="feature-container-content-text">
                Lập kế hoạch, theo dõi và phân phối công việc tốt nhất của nhóm
                bạn chưa bao giờ dễ dàng hơn thế. Một không gian làm việc tích
                hợp dễ sử dụng, TeamFlow cho phép bạn dành ít thời gian hơn để
                quản lý công việc của mình và có nhiều thời gian hơn để thực sự
                thực hiện công việc đó.
              </p>
            </div>
          </div>
        </section>
      </ContentContainer>
    </React.Fragment>
  );
};
