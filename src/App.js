import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchResults from './components/SearchResults.js'
import Home from './components/Home.js'
import Report from './components/Report.tsx'
import Map from './components/Map.js'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/:searchParam" element={<SearchResults />} />
        <Route path="/contract/:searchParam" element={<SearchResults />}  />
        <Route path="/report" element={<Report />}  />
        <Route path="/map" element={<Map />}  />
      </Routes>
    </>);
}