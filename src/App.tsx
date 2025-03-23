import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Signin from "./pages/signin";
import Home from "./pages/home";
import Patient from "./pages/patient"
import PatientData from "./pages/patientData"
import Consultation from "./pages/consultation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/patientData" element={<PatientData />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  );
}

export default App;
