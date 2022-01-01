import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Map from '../../Components/GoogleMap/Map';
import './UserDetails.css';

const UserDetails = () => {
const navigate = useNavigate();
const locationData = useLocation();
const latitude = parseInt(locationData.state.location.coordinates.latitude);
const longitude = parseInt(locationData.state.location.coordinates.longitude);
const addrress = locationData.state.location.street.name + ", " + locationData.state.location.city + ", " + locationData.state.location.state;

const location = {
    address: addrress,
    lat: latitude,
    lng: longitude,
  }

return (
    <div className="user-details">
      <header className="user-details-header">
        <h1>User Details</h1>
        <div className='user-box'>
          <div> <img src={locationData.state.img} alt="Avatar" style={{ borderRadius: "100%" }}/></div>
          <div> {locationData.state.fname} </div>
          <div> <a href={"mailto:" + locationData.state.email} style={{ color: "aqua" }}> {locationData.state.email} </a></div>
          <div> {locationData.state.gender} </div>
          <div> {locationData.state.age} </div>
          <Map location={location} zoomLevel={5} />
          <button onClick={() => navigate(-1)}><div className="arrow left"></div></button>
        </div>
      </header>
    </div>
  );
}

export default UserDetails;