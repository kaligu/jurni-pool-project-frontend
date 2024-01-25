import { useEffect, useState } from 'react';
import MapView from '../../components/MapView';
import NavigationBar from '../../components/NavigationBar'

interface Location {
  latitude: number;
  longitude: number;
}
interface TripRouteMarker {
  latitude: number;
  longitude: number;
  address: string;
}

// ... (previous imports and interfaces)

function OfferRide() {
  const [userLocation, setUserLocation] = useState<Location | undefined>();
  const [userTotalTripDistance, setUserTotalTripDistance] = useState<string>();
  const [userTotalTripTime, setUserTotalTripTime] = useState<string>();
  const [userTotalTripDataArray, setUserTotalTripDataArray] = useState<TripRouteMarker[]>([]);

  useEffect(() => {
 
  }, [userLocation, userTotalTripDistance, userTotalTripTime, userTotalTripDataArray]);
  

  const getUserLocation = (data: Location | undefined) => {
    setUserLocation(data);
  };

  function getUserTotalTripDistance(string: string | undefined) {
    setUserTotalTripDistance(string);
  }

  function getUserTotalTripTime(string: string | undefined) {
    setUserTotalTripTime(string);
  }

  function getUserTotalTripDataMarker(data: TripRouteMarker) {
    setUserTotalTripDataArray((prevuserTotalTripDataArray) => [
      ...prevuserTotalTripDataArray,
      { latitude: data.latitude, longitude: data.longitude, address: data.address }
    ]);
  }

  // useEffect(() => {
  //   // This block will be executed whenever userTotalTripDataArray changes
  //   alert(userTotalTripDistance);
  // }, [ userTotalTripDistance]);

  return (
    <div>
      <NavigationBar clickedState={2} />
      <MapView
        getUserLocation={getUserLocation}
        getUserTotalTripDistance={getUserTotalTripDistance}
        getUserTotalTripTime={getUserTotalTripTime}
        getUserTotalTripDataMarker={getUserTotalTripDataMarker}
      />

{/* <div className='absolute bottom-2 left-0 right-0 flex justify-center h-2/5'>
  <div className='flex md:flex-row space-x-4'>

    <div className='w-96 bg-black border-[#4D6DE3] border-2 rounded-lg'>

    </div>

    <div className='w-96 bg-red-500 border-[#4D6DE3] border-2 rounded-lg'>

    </div>

    <div className='w-96 bg-green-500 border-[#4D6DE3] border-2 rounded-lg'>

    </div>

  </div>
</div> */}

<div className='flex items-center justify-center h-screen'>
  <div className='absolute top-2/3 w-11/12'>
    <div className='flex flex-col space-y-2'>
      <div className='h-96 bg-black'></div>
      <div className='h-96 bg-red-500'></div>
      <div className='h-96 bg-green-500'></div>
    </div>
  </div>
</div>



</div>

  );
}

export default OfferRide;
