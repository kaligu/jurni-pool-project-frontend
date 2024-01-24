/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useEffect, useState } from 'react';
import '../assets/styles/MapViewStyle.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import { DivIcon,    LatLngExpression } from 'leaflet';
// import ProfileAvatarIcon from '../assets/test_avatar.jpg';
import CurrentLocationIcon from '../assets/current_location.png';
import RoutingMachine from './RoutingMachine';
import FullLoadScreen from './FullLoadScreen';

interface Location {
  latitude: number;
  longitude: number;
}

interface TripRouteMarker {
  latitude: number;
  longitude: number;
  address: string;
}
interface PropsTypes {
  getUserLocation: (data: Location| undefined) => void;
}

function MapView(props:PropsTypes) {
  const [userLocation, setUserLocation] = useState<Location>();
  const [markers, setMarkers] = useState<Array<Location>>([]);
  const [tripRouteMarkers, setTripRouteMarkers] = useState<Array<TripRouteMarker>>([]);
  const [totalDistance, setTotalDistance] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const [errorFetchingLocation, setErrorFetchingLocation] = useState(false);
  const [loading, setLoading] = useState(false);

  const getLocation = (latitude: number, longitude: number) => {
    setUserLocation({ latitude, longitude });
    console.log('User Location:', { latitude, longitude });
    props.getUserLocation({ latitude, longitude });
  };

  const handleMapClick = async (event: any) => {
    const { lat, lng } = event.latlng;
    const newMarker = { latitude: lat, longitude: lng };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
      const data = await response.json();

      const addressName = data.display_name || 'Address not found';
      setTripRouteMarkers((prevTripRouteMarkers) => [
        ...prevTripRouteMarkers,
        { latitude: lat, longitude: lng, address: addressName },
      ]);
      // Update the numbering based on the length of tripRouteMarkers array

      setTimeout(function() {
        const routingDataElement = document.querySelector(".leaflet-routing-container .leaflet-routing-alternatives-container .leaflet-routing-alt h3");
  let text = (routingDataElement?.textContent) || ',';
  let words = text.split(', ');
  console.log("Kilometers: ", words[0]);  // Output: Kilometers: ddd
  console.log("Time: ", words[1]);  // Output: Time: ff
      setTotalDistance(parseFloat(words[0]));
      setTotalTime(parseFloat(words[1]));
      // GetUserTotalTripDistance(totalDistance);
      // GetUserTotalTripTime(totalTime);
      // GetUserTotalTripDataAray(ma);
    }, 1000);
      
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  useEffect(() => {
    console.log('Size of array:', tripRouteMarkers.length);
    console.log('All Trip Route Markers:', tripRouteMarkers);
    setRefreshKey((prevKey) => prevKey + 1);
    // Log details from Leaflet Routing Machine
    
  }, [tripRouteMarkers]);

  const handleButtonClick = async () => {
    try {
      setLoading(true);
  
      if (navigator.geolocation) {
        await new Promise<void>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              getLocation(latitude, longitude);
              resolve();
            },
            (error) => {
              console.error('Error getting user location:', error.message);
              setErrorFetchingLocation(true);
              alert('Please allow location access to use this feature.');
              reject(error);
            }
          );
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
        setErrorFetchingLocation(true);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
      
    }
  };
  

  useEffect(() => {
 
    handleButtonClick();
    
  }, []);

  const locationToLatLngExpression = (location: Location): LatLngExpression => ({
    lat: location.latitude,
    lng: location.longitude,
  });

  const userProfileImage = localStorage.getItem('jur_ni_data_Profile_image') || ''; // Get the user profile image data

  const customIcon = new DivIcon({
    className: 'custom-icon',
    html: `<div style="width: 60px; height: 60px; background-color: #4D6DE3; border-radius: 60px 60px 0px 60px; position: relative; transform: rotate(45deg); display: flex; justify-content: center; align-items: center;">
            <img src=${userProfileImage} style="width: 80%; height: 80%; border-radius: 50%; transform: rotate(-45deg); object-fit: cover;">
        </div>`,
    iconSize: [60, 60],
  });

  const stopIcon = (index: number) => new DivIcon({
    className: 'custom-icon',
    html: `<div style="width: 60px; height: 60px; background-color: #d51507; border-radius: 60px 60px 0px 60px; position: relative; transform: rotate(45deg); display: flex; justify-content: center; align-items: center;">
              <div style="width: 80%; height: 80%; border-radius: 50%; transform: rotate(-45deg); object-fit: cover; background-color: #000000; display: flex; justify-content: center; align-items: center; text-align: center; color:#FFFFFF;">
                <h1 style="font-size: 30px; margin: 0;">${index}</h1>
              </div>
          </div>`,
    iconSize: [60, 60],
  });
  
  return (
    <>
    

    {/* loading component */}
    {loading && <FullLoadScreen loadingTime={3}/>}

      <div className='flex flex-row'>
        <div className='absolute -z-50'>
          <div className=''>
            <div className='map'>
              {(userLocation || errorFetchingLocation) && (
                <MapContainer

                  center={userLocation ? locationToLatLngExpression(userLocation) : [0, 0]}
                  zoom={userLocation ? 15 : 2}
                  scrollWheelZoom={true}
                  style={{ height: '90vh', width: '100vw', backgroundColor: '#4D6DE3' }}
                  zoomControl={true} // Disable zoom control
                >
                  {/* Base Map Layer */}
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />

  {/* Roads Layer (example using OpenStreetMap's Roads API) */}
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/roads/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
                  {userLocation && <Marker position={locationToLatLngExpression(userLocation)} icon={customIcon} />}

                  <MapClickHandler onMapClick={handleMapClick} />

                  {markers.map((marker, index) => (
                    <Marker
                      key={index}
                      position={locationToLatLngExpression(marker)}
                      icon={stopIcon(index+1)}
                    >
                    
                      <Popup>
                        ddddddd
                      </Popup>
                      </Marker>
                  ))}
                  <RoutingMachine key={refreshKey} array={tripRouteMarkers} />
                  
                  {/* Display an alternative map or message in case of an error fetching user location */}
                  {!userLocation && errorFetchingLocation && (
                    <div style={{ height: '5vh', width: '100vw', backgroundColor: 'red', color: 'white', textAlign: 'center', position: 'absolute', zIndex: '10000' }}>
                      <p>Error fetching user location. Please allow location access to use this feature.</p>
                      {/* You can add more styling or information as needed */}
                    </div>
                  )}
                  
                </MapContainer>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=' absolute z-50 mt-20 ml-1'>
        <img src={CurrentLocationIcon} width={'45px'} onClick={handleButtonClick}/>
      </div>
    </>
  );
}

function MapClickHandler({ onMapClick }: { onMapClick: (event: any) => void }) {
  const map = useMapEvents({
    click: onMapClick,
  });

  console.log(map);
  return null;
}

export default MapView;
