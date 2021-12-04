import Header from "components/Header";
import AppRouter from "Router";
import styled from "styled-components";

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
