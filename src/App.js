import Header from "./Components/Header";
import AdminDashboard from "./Styles/GlobalStyles";
import Router from "./routes";

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
