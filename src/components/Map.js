import React from 'react';
import TopBar from './TopBar';
import GoogleMapReact from 'google-map-react';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import Tooltip from '@mui/material/Tooltip';

export default function Map() {

  const AnyReactComponent = ({ text }) => <div>
    <Tooltip title="arc1">
      <PersonPinCircleIcon/>
    </Tooltip>
    </div>;
  
  return <div style={{ height: "100vh", display: "flex", "flex-direction": "column" }}>
    <TopBar/>
      <div style={{ width: '100%', height: '100%', position: 'relative', top: '1px' }}>
        <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDOXXyDtcn9LAJ97zIhOZxu_w7X1Z72OzE" }}
              defaultCenter={{lat: 41.5, lng: -71.5}}
              defaultZoom={11}
            >

            <AnyReactComponent lat={41.5} lng={-71.3}>text</AnyReactComponent>

        </GoogleMapReact>
      </div>
  </div>;
}
