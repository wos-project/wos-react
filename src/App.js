import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchResults from './screens/SearchResults.js'
import Home from './screens/Home.js'
import Report from './screens/Report.tsx'
import Map from './screens/Map.js'
import Tracker from './screens/Tracker.js'
import Trackers from './screens/Trackers.js'
import NftCreate from './screens/NftCreate.js'
import NftImport from './screens/NftImport.js'
import Sites from './screens/Sites.js'
import Site from './screens/Site.js'
import Bounties from './screens/Bounties.js'
import Bounty from './screens/Bounty.js'
import AboutUs from './screens/AboutUs.js'
import ThreeD from './screens/3d.js'
import MyNftsCollection from './screens/MyNftsCollection.js'
import MyNftsHistory from './screens/MyNftsHistory.js'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/:searchText" element={<SearchResults />} />
        <Route path="/contract/:contractAddr" element={<SearchResults />}  />
        <Route path="/bounties" element={<Bounties />}  />
        <Route path="/tracker" element={<Tracker />}  />
        <Route path="/trackers" element={<Trackers />}  />
        <Route path="/report" element={<Report />}  />
        <Route path="/map" element={<Map />}  />
        <Route path="/sites" element={<Sites />}  />
        <Route path="/site" element={<Site />}  />
        <Route path="/nftcreate" element={<NftCreate />}  />
        <Route path="/nftimport" element={<NftImport />}  />
        <Route path="/bounties" element={<Bounties />}  />
        <Route path="/bounty" element={<Bounty />}  />
        <Route path="/aboutus" element={<AboutUs />}  />
        <Route path="/mynfts/collection" element={<MyNftsCollection />}  />
        <Route path="/mynfts/history" element={<MyNftsHistory />}  />
        <Route path="/3d" element={<ThreeD />}  />
      </Routes>
    </>);
}