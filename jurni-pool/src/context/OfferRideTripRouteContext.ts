import { createContext } from "react";

// Trip array
const OfferRideTripRoutesArray = createContext<any>(undefined);

// Trip length and time
const OfferRideTripTotalDistance = createContext<any>(undefined);

// Trip time
const OfferRideTripTotalTime = createContext<any>(undefined);

export { OfferRideTripRoutesArray, OfferRideTripTotalDistance, OfferRideTripTotalTime };
