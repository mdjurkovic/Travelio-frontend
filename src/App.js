import { Header } from "./Components";
import AdminDashboard from "./Styles/GlobalStyles";
import Router from "./Routes/routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <AdminDashboard />
    </div>
  );
};

export default App;
