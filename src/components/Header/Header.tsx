import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Link } from "react-router-dom";
import palette from "styles/palette";
import { auth } from "firebase.utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export interface HeaderPropsType {
  isLoggedIn: boolean;
  userObj: any;
}

const Header = ({ isLoggedIn, userObj }: HeaderPropsType) => {
  const onLogOutClick = () => auth.signOut();
  const onSocialClick = async () => {
    const provider = await new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
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
                HELLO,
                <Router>
                  <Link to="/profile">
                    {userObj.displayName ? userObj.displayName : userObj.email}
                  </Link>
                </Router>
              </span>
              <div className="header-separate"></div>
              <button className="logout" onClick={onLogOutClick}>
                logout
              </button>
            </>
          ) : (
            <>
              <span className="user-email">Welcome~!</span>
              <div className="header-separate"></div>
              <button className="login" onClick={onSocialClick}>
                login with Google
              </button>
            </>
          )}
        </div>
      </div>
    </StyledHeader>
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
  background-color: #2f2f2f;

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

    button {
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: ${palette.grey_1};
      cursor: pointer;
      background: none;
      padding: 0;
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
  }
`;

export default Header;
