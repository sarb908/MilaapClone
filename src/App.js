import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";

import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box className="App">
      <Navbar />
      <MainRoutes />
    </Box>




  );
}

export default App;
