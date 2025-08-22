import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Package from "./pages/Package";
import WarrantyCalculation from "./pages/WarrantyCalculation";
import EmailVerification from "./pages/EmailVerification";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ROUTES } from "./constant/route";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.APPLICATION.ROOT}>
              <Route path="property" element={<Property />} />
              <Route path="package" element={<Package />} />
              <Route path="warranty" element={<WarrantyCalculation />} />
              <Route
                path="email-verification"
                element={<EmailVerification />}
              />
            </Route>
          </Routes>
        </Layout>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
