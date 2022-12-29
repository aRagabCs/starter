import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main";
import Search from "./pages/search";
import NotFound from "./pages/notfound";

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
