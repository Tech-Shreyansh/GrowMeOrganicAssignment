import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstPage/firstPage";
import SecondPage from "./secondPage/secondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<SecondPage />} path="/main" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
