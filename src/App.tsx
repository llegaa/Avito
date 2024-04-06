import { useState } from "react";
import s from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { MainPage } from "./page/MainPage/MainPage";
import { Element } from "./page/Element/Element";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path=":id" element={<Element/>} />
        </Routes>
      </Router>
    </div>
  );
};