import React, { useContext, useEffect, useState } from 'react';
import MapView from '../../components/MapView';
import NavigationBar from '../../components/NavigationBar';
import { useLocation } from 'react-router-dom';

function OfferRide() {

  const [userLocation, setUserLocation] = useState();

  useEffect(() => {

    // For example, you might want to trigger some action or update state
    // based on the new tripTotalDistance value.
  }, []);

  function GetUserLocation(userloct:any){
    setUserLocation(userloct);
    console.log("+++++++++++++++++++++++++++++++++++++++++++",userloct)
  }

  return (
    <div>
      <NavigationBar clickedState={2} />
      <MapView GetUserLocation={GetUserLocation} />
    </div>
  );
}

export default OfferRide;
