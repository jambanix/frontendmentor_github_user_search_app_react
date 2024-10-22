import "./App.css";
import { Body } from "./components/Layout/Body";
import { PageContainer } from "./components/Layout/PageContainer";
import { Header } from "./components/Layout/Header";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <>
    <ThemeProvider>
      <PageContainer>
        <Header />
        <Body />
      </PageContainer>
    </ThemeProvider>
    </>
  );
}

export default App;
