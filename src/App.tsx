import Header from "components/Header";
import { auth } from "firebase.utils";
import React, { useEffect, useState } from "react";
import AppRouter from "Router";
import styled from "styled-components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState();
  const [init, setInit] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <>
          <Header isLoggedIn={isLoggedIn} userObj={userObj} />
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </>
      )}
    </>
  );
}

const AppLayout = styled.section`
  padding-top: 70px;
`;

export default App;
