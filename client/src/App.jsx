import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import { Toaster } from "react-hot-toast";

import "@fontsource/open-sans";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HistoryBox from "./components/HistoryBox";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />{" "}
        <Route path="/history" Component={HistoryBox} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
