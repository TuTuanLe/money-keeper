import React, { ReactElement } from "react";
import {
  HeaderContainer,
  BackgroundImage,
  Wrapper,
  Container,
} from "./Header.style";
import logo2x from "../img/Logo.png";
import { DownOutlined } from "@ant-design/icons";
import { GlobalStyles } from "../GlobalStyles/GlobalStyle.style";

export const Header = (): ReactElement => {
  const srcSet = ` ${logo2x} 2x`;

  return (
    <React.Fragment>
      <GlobalStyles />
      <HeaderContainer>
        <Wrapper>
          <Container>
            <div className="header-container">
              <img srcSet={srcSet} alt="" />
              <ul className="menu">
                <li>
                  <a href="#" className="menu-item">
                    Sản phẩm
                    <DownOutlined style={{ color: "#ffffff" }} />
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Giải pháp
                    <DownOutlined style={{ color: "#ffffff" }} />
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item menu-iconless">
                    Doanh nghiệp
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item menu-iconless">
                    Định giá
                  </a>
                </li>
              </ul>
              <div className="header-auth">
                <li>
                  <a href="" className="signin">
                    Đăng Nhập
                  </a>
                </li>
                <li>
                  <a href="" className="signup">
                    Đăng Kí
                  </a>
                </li>
              </div>
            </div>
            <BackgroundImage>
              <div className="pain-big"></div>
            </BackgroundImage>
          </Container>
        </Wrapper>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
