import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayBooks from "./components/DisplayBooks";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";

const App = memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<DisplayBooks />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
));

export default App;
