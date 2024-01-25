import { useEffect, useState } from 'react';
import MapView from '../../components/MapView';
import NavigationBar from '../../components/NavigationBar'
import { Card, Typography } from "@material-tailwind/react";

interface Location {
  latitude: number;
  longitude: number;
}
interface TripRouteMarker {
  num:number;
  latitude: number;
  longitude: number;
  address: string;
}

const TABLE_HEAD = ["අංකය", "මාර්ගය"];

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
      { latitude: data.latitude, num:prevuserTotalTripDataArray.length+1, longitude: data.longitude, address: data.address }
    ]);
  }

  return (
    <>
    <NavigationBar clickedState={2} />
<MapView
         getUserLocation={getUserLocation}
         getUserTotalTripDistance={getUserTotalTripDistance}
        getUserTotalTripTime={getUserTotalTripTime}
         getUserTotalTripDataMarker={getUserTotalTripDataMarker}
       />

<div className='w-full h-60 absolute z-40 bottom-3   flex-col'>
<div className='flex flex-row justify-center'>
  <div><h1 className='font-bold text-sm md:text-base'>ගමන් මාර්ගය</h1></div>

  </div>  
  <div className='flex flex-row justify-center space-x-10'>
  <div>
    <div className='flex flex-row'>
  <img width="40" height="44"src="https://img.icons8.com/glyph-neue/64/checked.png" alt="checked"/>
<h1 className='mt-3 font-semibold text-xs'>ඉදිරියට
</h1>
</div>
  </div>
  </div>
  <div className='flex items-center justify-center bottom-1'>
  
  <div className='bg-[#F1FCFD] h-44 w-11/12 flex items-center justify-center border-[#4D6DE3] border-2 rounded-lg' >



  <Card className="h-full w-full overflow-scroll" placeholder={undefined}>
  <table className="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        {TABLE_HEAD.map((head) => (
          <th
            key={head}
            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {userTotalTripDataArray.length === 0 ? (
        <tr>
          <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
              placeholder={undefined}
            >
              <div>ඔබගේ ගමන් මාර්ගය මැප් එක මත සලකුණු කරන්න</div>
              <div>මැප් එක මත ටච් කිරීමෙන් සලකුණු කිරීම සිදුකළ හැක.</div>
               <div>ඉදිරියට යාමට ස්ථාන දෙකක් අවමව සලකුණු කළ යුතුය</div>

            </Typography>
          </td>
        </tr>
      ) : (
        userTotalTripDataArray.map(({ address, num }, index) => {
          const isLast = index === userTotalTripDataArray.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={num}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {num}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {address}
                </Typography>
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  </table>
</Card>



  </div>
  </div>
</div>



    </>

  );
}

export default OfferRide;


{/* <div className='w-full h-60 absolute z-40 bottom-3   flex-col'>
<div className='flex flex-row justify-center'>
  <div><h1 className='font-bold text-sm md:text-base'>ඔබගේ ගමන් මාර්ගය මැප් එක මත සලකුණු කරන්න</h1></div>

  </div>  
  <div className='flex flex-row justify-center space-x-10'>
  <div className='flex flex-row'>
  
<h1 className='mt-2 font-semibold text-xs'>ඉදිරියට

</h1>
<img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/circled-left-2.png" alt="circled-left-2"/>
</div>
  <div>
    <div className='flex flex-row'>
  <img width="40" height="44" src="https://img.icons8.com/glyph-neue/64/circled-right.png" alt="circled-right"/>
<h1 className='mt-2 font-semibold text-xs'>ඉදිරියට
</h1>
</div>
  </div>
  </div>
  <div className='flex items-center justify-center bottom-1'></div> */}