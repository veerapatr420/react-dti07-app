import React from "react";
import Dtipage01 from "./assets/pages/Dtipage01";
import Dtipage02 from "./assets/pages/Dtipage02";
import Notfound from "./assets/pages/Notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Dti-page-01" element={<Dtipage01 />} />
          <Route path="/Dti-page-02" element={<Dtipage02 />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
