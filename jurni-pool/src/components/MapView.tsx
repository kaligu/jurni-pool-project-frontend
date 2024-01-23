/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useEffect, useState } from 'react';
import '../assets/styles/MapViewStyle.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { DivIcon,  LatLngExpression } from 'leaflet';
import ProfileAvatarIcon from '../assets/test_avatar.jpg';
import RoutingMachine from './RoutingMachine';
interface Location {
  latitude: number;
  longitude: number;
}

interface TripRouteMarker {
  latitude: number;
  longitude: number;
  address: string;
}

function MapView() {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [markers, setMarkers] = useState<Array<Location>>([]);
  const [tripRouteMarkers, setTripRouteMarkers] = useState<Array<TripRouteMarker>>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [errorFetchingLocation, setErrorFetchingLocation] = useState(false);

  const getLocation = (latitude: number, longitude: number) => {
    setUserLocation({ latitude, longitude });
    console.log('User Location:', { latitude, longitude });
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
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  useEffect(() => {
    console.log('Size of array:', tripRouteMarkers.length);
    console.log('All Trip Route Markers:', tripRouteMarkers);
    setRefreshKey((prevKey) => prevKey + 1);
  }, [tripRouteMarkers]);

  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
          setErrorFetchingLocation(true);
          alert('Please allow location access to use this feature.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setErrorFetchingLocation(true);
    }
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  const locationToLatLngExpression = (location: Location): LatLngExpression => ({
    lat: location.latitude,
    lng: location.longitude,
  });

  const customIcon = new DivIcon({
    className: 'custom-icon',
    html: `<div style="width: 60px; height: 60px; background-color: #4D6DE3; border-radius: 60px 60px 0px 60px; position: relative; transform: rotate(45deg); display: flex; justify-content: center; align-items: center;">
            <img src="${ProfileAvatarIcon}" style="width: 80%; height: 80%; border-radius: 50%; transform: rotate(-45deg); object-fit: cover;">
        </div>`,
    iconSize: [60, 60],
  });

  return (
    <>
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
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {userLocation && <Marker position={locationToLatLngExpression(userLocation)} icon={customIcon} />}

                  <MapClickHandler onMapClick={handleMapClick} />

                  {markers.map((marker, index) => (
                    <Marker
                      key={index}
                      position={locationToLatLngExpression(marker)}
                      icon={customIcon}
                    />
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
