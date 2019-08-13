import { MapsObjectService } from '../../../services';
import { mapEventNames } from './event-names';
import { groupMapProps } from './group-map-props';

export class MapService extends MapsObjectService<
  google.maps.Map,
  MapEventName,
  google.maps.MapOptions,
  MapEventHandler
> {
  constructor(
    googleApi: Google,
    container: HTMLDivElement,
    options: google.maps.MapOptions,
  ) {
    super(googleApi, new googleApi.maps.Map(container, options));
  }
	
  eventNames = mapEventNames;	
  groupProps = groupMapProps;

  setCenter(center: google.maps.LatLngLiteral) {
    this.object.setCenter(center);
  }

  panTo(center: google.maps.LatLngLiteral) {
    this.object.panTo(center);
  }

  setZoom(zoom: number) {
    this.object.setZoom(zoom);
  }

  setBounds(
    bounds: google.maps.LatLngBounds |
      google.maps.LatLngBoundsLiteral |
      google.maps.LatLngLiteral[],
  ) {
    bounds = this.convertToLatLngBounds(bounds);

    this.object.fitBounds(bounds);
  }

  panToBounds(
    bounds: google.maps.LatLngBounds |
      google.maps.LatLngBoundsLiteral |
      google.maps.LatLngLiteral[],
  ) {
    bounds = this.convertToLatLngBounds(bounds);

    this.object.panToBounds(bounds);
  }

  getBounds(): google.maps.LatLngBoundsLiteral | undefined {
    const bounds = this.object.getBounds();

    if (!bounds) return;

    return this.google.custom.boundsToLiteral(bounds);
  }

  getZoom(): number {
    return this.object.getZoom();
  }

  getCenter(): google.maps.LatLngLiteral {
    const center = this.object.getCenter();

    return {
      lat: center.lat(),
      lng: center.lng(),
    };
  }

  setOptions({bounds, ...options}: google.maps.MapOptions & {
    bounds?: google.maps.LatLngBoundsLiteral | google.maps.LatLngLiteral[],
  }) {
    if (bounds) {
      this.setBounds(bounds);
    }

    super.setOptions(options);
  }

  insertMapType(index: number, overlay: google.maps.MapType) {
    this.object.overlayMapTypes.insertAt(index, overlay);
  }

  private convertToLatLngBounds(
    bounds: google.maps.LatLngBounds |
      google.maps.LatLngBoundsLiteral |
      google.maps.LatLngLiteral[],
  ): google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral {
    if (Array.isArray(bounds)) {
      bounds = this.google.custom.pointsToBounds(bounds);
    }

    return bounds;
  }
}
