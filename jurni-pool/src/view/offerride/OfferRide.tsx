import { useEffect, useState } from 'react';
import MapView from '../../components/MapView';
import NavigationBar from '../../components/NavigationBar'
import UserFooter from '../footer/UserFooter';

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
    <>
    <NavigationBar clickedState={2} />
    {/* <div className='flex flex-col w-screen h-screen md:flex-row md:hidden'>
  <div className='md:w-8/12 md:h-full w-full h-1/2 bg-[#F1FCFD]'>
       <MapView
         getUserLocation={getUserLocation}
         getUserTotalTripDistance={getUserTotalTripDistance}
        getUserTotalTripTime={getUserTotalTripTime}
         getUserTotalTripDataMarker={getUserTotalTripDataMarker}
       />
  </div>
  <div className='md:w-4/12 md:h-full w-full h-1/2 bg-red-500 flex items-center justify-center'>
  <div className='bg-black w-96 h-96'></div>
</div>
</div> */}


<div className='flex flex-col w-screen md:flex-row absolute z-50'>
  <div className='md:w-8/12 md:h-full w-full h-full bg-[#F1FCFD]'>
       <MapView
         getUserLocation={getUserLocation}
         getUserTotalTripDistance={getUserTotalTripDistance}
        getUserTotalTripTime={getUserTotalTripTime}
         getUserTotalTripDataMarker={getUserTotalTripDataMarker}
       />
  </div>
  <div className='md:w-4/12 md:h-full w-full h-96 bg-[#4D6DE3] flex items-center justify-center mt-72'>
  <div className='bg-black w-11/12 h-5/6'></div>
</div>
<UserFooter/>
   

</div>


    </>
//     <div >
//       <NavigationBar clickedState={2} />
//       <div className='flex flex-col'>
//         <div className='w-screen h-96'>
//         <MapView
//         getUserLocation={getUserLocation}
//         getUserTotalTripDistance={getUserTotalTripDistance}
//         getUserTotalTripTime={getUserTotalTripTime}
//         getUserTotalTripDataMarker={getUserTotalTripDataMarker}
//       />
//         </div>

//         <div className='w-screen h-1/2'>
//         <div className='w-96 h-96 bg-black absolute z-40 mt-0'>
//         </div>

//       </div>
      

      

//       </div>

// {/* <div className='absolute z-50 top-90 w-11/12 h-96 bg-[#e0f2ff] border-[#4D6DE3] border-2 rounded-lg'></div>
//        */}
      

// {/* <div className='absolute bottom-2 left-0 right-0 flex justify-center h-2/5'>
//   <div className='flex md:flex-row space-x-4'>

//     <div className='w-96 bg-black border-[#4D6DE3] border-2 rounded-lg'>

//     </div>

//     <div className='w-96 bg-red-500 border-[#4D6DE3] border-2 rounded-lg'>

//     </div>

//     <div className='w-96 bg-green-500 border-[#4D6DE3] border-2 rounded-lg'>

//     </div>

//   </div>
// </div> */}

// {/* <div className='top-96 left-0 right-0 flex justify-center '>
//   <div className='flex flex-col space-y-2 w-screen mx-auto'>

//   <div className='w-full h-96 flex justify-center items-center'></div>


//   <div className='w-full h-96 flex justify-center items-center '>
//   <div className=' w-11/12 h-96 bg-[#e0f2ff] border-[#4D6DE3] border-2 rounded-lg'></div>
//   </div>

//   <div className='w-full h-96 flex justify-center items-center'>
//   <div className='w-11/12 h-96 bg-[#e0f2ff] border-[#4D6DE3] border-2 rounded-lg'></div>
//   </div>

//   <div className='w-full h-96 flex justify-center items-center'>
//   <div className='w-11/12 h-96 bg-[#e0f2ff] border-[#4D6DE3] border-2 rounded-lg'></div>
//   </div>
//   </div>
// </div> */}





// </div>

  );
}

export default OfferRide;
