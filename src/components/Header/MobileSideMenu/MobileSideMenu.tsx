import useAuthService from "hooks/useAuthService";
import useUser from "hooks/useUser";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import styled from "styled-components";
import palette from "styles/palette";

export interface MobileSideMenuPropsType {
  setActiveMobileSideMenu: (value: boolean) => void;
  activeMobileSideMenu: boolean;
  isLoggedIn: boolean;
}

const MobileSideMenu = ({
  setActiveMobileSideMenu,
  activeMobileSideMenu,
  isLoggedIn,
}: MobileSideMenuPropsType) => {
  const { responseGoogle, handleLogOut } = useAuthService();
  const { userObj } = useUser();

  return (
    <Wrapper activeMobileSideMenu={activeMobileSideMenu}>
      <button className="close" onClick={() => setActiveMobileSideMenu(false)}>
        <img src="/image/close.svg" />
      </button>
      <ProfileSection>
        {isLoggedIn ? (
          <>
            <h3>HELLO :)</h3>
            <h3>{userObj?.nickname}</h3>
            <button className="logout" onClick={handleLogOut}>
              logout
            </button>
          </>
        ) : (
          <>
            <h3>반가워요</h3>
            <h3>로그인 해주세요!</h3>
            <GoogleLogin
              clientId="47989076113-v9i17kn2i3bku3ko07pu287du8akot88.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  login
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </>
        )}
      </ProfileSection>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ activeMobileSideMenu: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: ${(props) => (props.activeMobileSideMenu ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: ${palette.grey_9};
  z-index: 12;
  padding: 64px 16px;
  transition: 0.5s all;
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  @media ${(props) => props.theme.tablet} {
    display: block;
  }
`;

const ProfileSection = styled.section`
  padding: 0 6px 32px;
  border-bottom: 2px solid ${palette.grey_1};

  h3 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    color: ${palette.grey_1};
    margin-bottom: 16px;
    &:first-child {
      margin-bottom: 12px;
    }
  }
  button {
    color: ${palette.grey_1};
    padding: 8px 2px;
    text-decoration: underline;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
  }
`;

export default MobileSideMenu;
