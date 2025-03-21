import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Signin from "./pages/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
