import React from "react";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Mainpage from "./pages/Mainpage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </div>
  );
};

export default App;
