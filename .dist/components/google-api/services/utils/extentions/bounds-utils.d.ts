/// <reference types="googlemaps" />
export declare const createBoundsUtils: (google: Google) => {
    boundsToLiteral: (bounds: google.maps.LatLngBounds) => google.maps.LatLngBoundsLiteral;
    pointsToBounds: (points: google.maps.LatLngLiteral[]) => google.maps.LatLngBounds;
};
