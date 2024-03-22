import GlobalStyle from "./Styles/GlobalStyles";
import { Footer, Header } from "./Components";
import Router from "./Routes/routes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
