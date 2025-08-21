import "./App.css";
import Home from "./pages/Home";
import Property from "./pages/Property";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SecondFormPage from "./pages/Package";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-form" element={<Property/>} />
          <Route path="/second-form" element={<SecondFormPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
