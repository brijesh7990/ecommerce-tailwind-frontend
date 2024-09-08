import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./context/ThemContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
