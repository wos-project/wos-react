import React from 'react';
//NOTE: leave commented for future use
//import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
//import Tooltip from '@mui/material/Tooltip';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect }  from 'react';
import { useParams } from "react-router-dom";
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import ParseLocation from '../utils/geom';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {

  const location = useLocation();
  const navParams = useParams();
  let navigate = useNavigate();

  const getLoc = () => {
    let { location } = navParams;
    let [x, y, err] = ParseLocation(location);
    if (!err) {
      return [x, y];
    } else {
      return [41.5, -71.4];
    }
  }
  const position = getLoc();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return <>
    <TopBar></TopBar>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossOrigin=""
    />
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ height: 480, width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          key={"Questori Arc"}
          position={position}
          eventHandlers={{
            click: () => {
              let x=position[0];
              let y=position[1];
              navigate(`/search/location:${x},${y}`);
            }
          }}
        />
      </MapContainer>
      <Footer></Footer>
  </>
}
