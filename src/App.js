import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchResults from './screens/SearchResults.js'
import Home from './screens/Home.js'
import Report from './screens/Report.tsx'
import Map from './screens/Map.js'
import Bounties from './screens/Bounties.js'
import CreatorsCreate from './screens/CreatorsCreate.js'
import CreatorsImport from './screens/CreatorsImport.js'
import MarketersBounties from './screens/MarketersBounties.js'
import MarketersBounty from './screens/MarketersBounty.js'
import MarketersSites from './screens/MarketersSites.js'
import MarketersSite from './screens/MarketersSite.js'
import MyNftsCollection from './screens/MyNftsCollection.js'
import MyNftsTrackers from './screens/MyNftsTrackers.js'
import MyNftsHistory from './screens/MyNftsHistory.js'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/:searchParam" element={<SearchResults />} />
        <Route path="/contract/:searchParam" element={<SearchResults />}  />
        <Route path="/bounties" element={<Bounties />}  />
        <Route path="/creators/create" element={<CreatorsCreate />}  />
        <Route path="/creators/import" element={<CreatorsImport />}  />
        <Route path="/report" element={<Report />}  />
        <Route path="/map" element={<Map />}  />
        <Route path="/marketers/bounties" element={<MarketersBounties />}  />
        <Route path="/marketers/bounty" element={<MarketersBounty />}  />
        <Route path="/marketers/sites" element={<MarketersSites />}  />
        <Route path="/marketers/site" element={<MarketersSite />}  />
        <Route path="/mynfts/collection" element={<MyNftsCollection />}  />
        <Route path="/mynfts/trackers" element={<MyNftsTrackers />}  />
        <Route path="/mynfts/history" element={<MyNftsHistory />}  />
      </Routes>
    </>);
}