import React from 'react';
import Map from '../../Components/GoogleMap/Map';

const Helper = ({ locationData }) => {

const location = {
    address: locationData.state.location.street.name + ", " + locationData.state.location.city + ", " + locationData.state.location.state,
    lat: parseInt(locationData.state.location.coordinates.latitude),
    lng: parseInt(locationData.state.location.coordinates.longitude),
  }

return (
        <Map location={location} zoomLevel={5} />
  );
}

export default Helper;