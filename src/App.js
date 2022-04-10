import * as React from 'react';
import SearchResults from './components/SearchResults.js'
import Home from './components/Home.js'
import { Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/:searchParam" element={<SearchResults />} />
        <Route path="/contract/:searchParam" element={<SearchResults />}  />
      </Routes>
    </>);
}