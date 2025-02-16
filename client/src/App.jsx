import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin, isDarkMode } = useContext(AppContext);

  return (
    //dark mode added
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "dark bg-gray-900 text-white"
          : "bg-gradient-to-b from-teal-50 to-orange-50"
      }`}
    >
      {" "}
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredits />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
