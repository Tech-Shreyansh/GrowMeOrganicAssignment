import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstPage/firstPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
