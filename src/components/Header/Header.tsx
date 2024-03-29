import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "styles/palette";
import GoogleLogin from "react-google-login";
import MobileSideMenu from "./MobileSideMenu";
import useAuthService from "hooks/useAuthService";
import useUser from "hooks/useUser";

export interface HeaderPropsType {
  isLoggedIn: boolean;
}

const Header = ({ isLoggedIn }: HeaderPropsType) => {
  const [activeMobileSideMenu, setActiveMobileSideMenu] = useState(false);

  const { responseGoogle, handleLogOut } = useAuthService();
  const { userObj } = useUser();

  return (
    <>
      <StyledHeader>
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img src="/image/board_rank_logo.svg" />
            </Link>
          </div>
          <div className="hello-user">
            {isLoggedIn ? (
              <>
                <span className="user-email">
                  HELLO,
                  <Link to="/profile">{userObj?.nickname}</Link>
                </span>
                <div className="header-separate"></div>
                <button className="logout" onClick={handleLogOut}>
                  logout
                </button>
              </>
            ) : (
              <>
                <span className="user-email">Welcome~!</span>
                <div className="header-separate"></div>
                <GoogleLogin
                  clientId="47989076113-v9i17kn2i3bku3ko07pu287du8akot88.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="login"
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
        isLoggedIn={isLoggedIn}
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
        margin-right: 28px;
      }
      button {
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: ${palette.grey_1};
        cursor: pointer;
        background: none;
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
      padding: 10px 40px 14px;
      border: 1px solid ${palette.grey_6};
      position: relative;
      border-radius: 3px;

      &:hover {
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${palette.grey_1};
          opacity: 0.1;
        }
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
        margin-left: 0;
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
