import Header from "components/Header";
import AppRouter from "Router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles/css/reset.css";
import "./styles/css/style.css";
import styled from "styled-components";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { userObj } = useUser();

  const LoginCheck = () => {
    userObj ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  useEffect(() => {
    LoginCheck();
  }, [userObj]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userObj={userObj} />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Router>
  );
}

const AppLayout = styled.section`
  padding-top: 70px;
`;

export default App;
