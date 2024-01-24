import React, { useContext, useEffect, useState } from 'react';
import MapView from '../../components/MapView';
import NavigationBar from '../../components/NavigationBar';
import { useLocation } from 'react-router-dom';

interface Location {
  latitude: number;
  longitude: number;
}

function OfferRide() {

  const [userLocation, setUserLocation] = useState<Location>();
  const [userTotalTripDistance, setUserTotalTripDistance] = useState();
  const [userTotalTripTime, setUserTotalTripTime] = useState();
  const [userTotalTripDataAray, setUserTotalTripDataAray] = useState();

  const getUserLocation =(data:Location | null) =>{
    setUserLocation(data);
     console.log("/////////////////////////////////////////////////////////////////////////////////////////////"+data);
    console.log("**" +userLocation?.longitude);
  }
  // function GetUserTotalTripDistance(td:any){
  //   setUserTotalTripDistance(td);
  // }
  // function GetUserTotalTripTime(tt:any){
  //   setUserTotalTripTime(tt);
  // }
  // function GetUserTotalTripDataAray(da:any){
  //   setUserTotalTripDataAray(da);
  // }

  return (
    <div>
      <NavigationBar clickedState={2} />
      <MapView 
        getUserLocation={getUserLocation}
      />
    </div>
  );
}

export default OfferRide;
