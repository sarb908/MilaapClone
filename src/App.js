import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";

import { Box } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import Loading from "./components/Loading";
ReactDOM.createPortal(<Loading />, document.getElementById("modal"));
function App() {
  return (
    <Box className="App">
      <Loading />
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
