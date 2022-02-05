import React from "react";


import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import Events from "../pages/events";
import Subscribe from "../pages/subscribe";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/events" element={<Events/>} />
    <Route path="/subscribe" element={<Subscribe/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
