import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "../NotFound";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </>
);

const App = () => {
  return (
    <main className="bg-black">
      <main className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
        </Routes>
      </main>
    </main>
  );
};

export default App;
