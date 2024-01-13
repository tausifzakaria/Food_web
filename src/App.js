import React from "react";
// THIS IMPORT IS FOR ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// THIS IMPORT IS FOR ALL PAGES
import { HomePage, CategoryPage, ErrorPage, MealDetailPage } from './pages/index';

//THIS IMPORT IS FOR COMPONENTS

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:id" element={<MealDetailPage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;