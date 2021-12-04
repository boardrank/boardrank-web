import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import palette from "styles/palette";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import MobileSideMenu from "./MobileSideMenu";

const Header = () => {
  const isLoggedIn = false;
  const [activeMobileSideMenu, setActiveMobileSideMenu] = useState(false);

  const responseGoogle = async (response: GoogleLoginResponse | any) => {
    try {
      const { id_token } = response.tokenObj;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledHeader>
        <div className="header-inner">
          <div className="logo">
            <Router>
              <Link to="/">
                <img src="/image/board_rank_logo.svg" />
              </Link>
            </Router>
          </div>
          <div className="hello-user">
            {isLoggedIn ? (
              <>
                <span className="user-email">
                  반가워요,
                  <Router>
                    <Link to="/profile">
                      {/* {userObj.displayName ? userObj.displayName : userObj.email} */}
                    </Link>
                  </Router>
                </span>
                <div className="header-separate"></div>
                <button className="logout" onClick={() => {}}>
                  logout
                </button>
              </>
            ) : (
              <>
                <span className="user-email">반가워요, 로그인 해주세요!</span>
                <div className="header-separate"></div>
                <GoogleLogin
                  clientId="47989076113-v9i17kn2i3bku3ko07pu287du8akot88.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      login with Google
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </>
            )}
          </div>
          <div
            className="hamburger"
            onClick={() => setActiveMobileSideMenu(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </StyledHeader>
      <MobileSideMenu
        setActiveMobileSideMenu={setActiveMobileSideMenu}
        activeMobileSideMenu={activeMobileSideMenu}
      />
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 0px;
  background-color: ${palette.grey_9};

  .header-inner {
    width: 100%;
    max-width: 1320px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px 0 113px;

    .logo {
      width: 110px;
    }

    .hello-user {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: ${palette.grey_1};
      display: flex;
      align-items: center;
      .user-email {
        margin-right: 35px;
        a {
          font-weight: 900;
          color: ${palette.grey_1};
          cursor: pointer;
          margin-left: 5px;
        }
      }
      .header-separate {
        width: 1px;
        height: 16px;
        background-color: ${palette.grey_1};
        margin-right: 44px;
      }
      button {
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: ${palette.grey_1};
        cursor: pointer;
        background: none;
        padding: 0;
      }
    }
    .logout,
    .login {
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: ${palette.grey_1};
      cursor: pointer;
      background: none;
      padding: 0;

      &:hover {
        text-decoration: underline;
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 56px;
      height: 56px;
      position: absolute;
      padding: 19px 18px;
      top: 0;
      right: 0;
      div {
        width: 100%;
        height: 2px;
        background-color: ${palette.grey_1};
      }
    }
  }
  @media ${(props) => props.theme.tablet} {
    height: 56px;
    .header-inner {
      justify-content: center;
      .logo {
        width: 170px;
      }
      .hello-user {
        display: none;
      }
      .hamburger {
        display: flex;
      }
    }
  }
`;

export default Header;
