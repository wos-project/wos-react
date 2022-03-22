import * as React from 'react';
import SearchResults from './components/SearchResults.js'
import Home from './components/Home.js'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/results/:searchParam" element={<SearchResults />} />
      </Routes>
    </>);
}