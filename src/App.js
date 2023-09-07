import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Water from "./Water";
import Soda from "./Soda";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine/>}/>
        <Route path="/chips" element={<Chips/>}/>
        <Route path="/water" element={<Water/>}/>
        <Route path="/soda" element={<Soda/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
