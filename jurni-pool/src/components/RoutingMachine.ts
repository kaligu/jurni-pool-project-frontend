import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

type TripRouteMarker = {
    latitude: number;
    longitude: number;
    // other properties...
  };

const createRoutingMachineLayer = (props: any) => {
  console.log("*******RoutingMachine props:", props);

  const instance = L.Routing.control({
  waypoints: props.array.map((marker: TripRouteMarker) =>
    L.latLng(marker.latitude, marker.longitude)
  ),
  lineOptions: {
    styles: [{ color: "#6FA1EC", weight: 5 }],
    extendToWaypoints: true, // Add this property
    missingRouteTolerance: 10, // Add this property (adjust the value as needed)
  },
  show: true,
  addWaypoints: false,
  routeWhileDragging: true,
  fitSelectedRoutes: true,
  showAlternatives: props.showAlternatives,
});


  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
