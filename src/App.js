import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
     <Footer />
    </div>
  );
}

export default App;
