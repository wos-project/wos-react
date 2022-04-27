import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchResults from './screens/SearchResults.js'
import Home from './screens/Home.js'
import Report from './screens/Report.tsx'
import Map from './screens/Map.js'
import MyNftsCollection from './screens/MyNftsCollection.js'
import CreatorsCreate from './screens/CreatorsCreate.js'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/:searchParam" element={<SearchResults />} />
        <Route path="/contract/:searchParam" element={<SearchResults />}  />
        <Route path="/creators/create" element={<CreatorsCreate />}  />
        <Route path="/report" element={<Report />}  />
        <Route path="/map" element={<Map />}  />
        <Route path="/mynfts/collection" element={<MyNftsCollection />}  />
      </Routes>
    </>);
}