import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Signin from "./pages/signin";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
