import Header from "components/Header";
import AppRouter from "Router";
import styled from "styled-components";
import "./styles/css/reset.css";
import "./styles/css/style.css";

function App() {
  return (
    <>
      <Header />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </>
  );
}

const AppLayout = styled.section`
  padding-top: 70px;
`;

export default App;
