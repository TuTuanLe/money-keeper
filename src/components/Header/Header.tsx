import React, { ReactElement } from "react";
import { HeaderContainer } from "./Header.style";
import logo2x from "./Logo.png";
import "./_reset.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');
</style>;

interface HeaderProps {}

function Header(props: HeaderProps): ReactElement {
  const srcSet = ` ${logo2x} 2x`;

  return (
    <HeaderContainer>
      <div className="wrapper">
        <div className="container">
          <div className="header-container">
            <img srcSet={srcSet} alt="" />
            <ul className="menu">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Sản phẩm
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Giải pháp
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Doanh nghiệp
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Định giá
                </a>
              </li>
              {/* <li className="menu-item menu-item--auth">
                <a href="#" className="header-signin">
                  Đăng Nhập
                </a>
                <a href="#" className="button button--outline">
                  Đăng Kí
                </a>
              </li> */}
            </ul>
            <div className="header-auth">
              <a href="" className="header-signin">
                Đăng Nhập
              </a>
              <a href="" className="header-signup">
                Đăng Kí
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
