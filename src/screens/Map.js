import React from 'react';
//NOTE: leave commented for future use
//import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
//import Tooltip from '@mui/material/Tooltip';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {

  const position = [41.5, -71.4]
  
  return <>
    <TopBar></TopBar>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossOrigin=""
    />
      <MapContainer center={[41.5, -71.5]} zoom={12} scrollWheelZoom={false} style={{ height: 480, width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          key={"asdf"}
          position={position}
          eventHandlers={{
            click: () => {
              console.log("marker clicked");
            }
          }}
        />
      </MapContainer>
      <Footer></Footer>
  </>
}
