import { Header } from "./Components";
import GlobalStyle from "./Styles/GlobalStyles";
import Router from "./Routes/routes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router />
    </div>
  );
};

export default App;
