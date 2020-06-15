import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
  const { name, cordinate, address } = props.marker;

  function handleClick(event) {
    console.log(event);
  }
  return (
    <Map
      google={props.google}
      center={{ lat: cordinate.lat || 40.7128, lng: cordinate.lng || -74.006 }}
      zoom={6}
    >
      <Marker
        title={`${name}, ${address}`}
        position={{
          lat: cordinate.lat || 40.7128,
          lng: cordinate.lng || -74.006,
        }}
      />
      <InfoWindow onClick={(e) => handleClick(e)}>
        <div>
          <h1>TITLE</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDS8Ff3hyZY8jV8bMuBz-A1Atc1ahwErak',
})(GoogleMap);
