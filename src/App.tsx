import Header from "components/Header";
import AppRouter from "Router";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./styles/css/reset.css";
import "./styles/css/style.css";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Header />
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
