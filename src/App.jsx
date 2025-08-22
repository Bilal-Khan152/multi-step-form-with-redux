import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Package from "./pages/Package";
import WarrantyCalculation from "./pages/WarrantyCalculation";
import EmailVerification from "./pages/EmailVerification";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-form" element={<Property />} />
            <Route path="/second-form" element={<Package />} />
            <Route path="/third-form" element={<WarrantyCalculation />} />
            <Route path="/forth-form" element={<EmailVerification />} />
          </Routes>
        </Layout>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
