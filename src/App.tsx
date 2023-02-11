import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstPage/firstPage";
import Data from "./secondPage/data";
import SecondPage from "./secondPage/secondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<SecondPage />} path="/main" />
        <Route element={<Data />} path="/data" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
