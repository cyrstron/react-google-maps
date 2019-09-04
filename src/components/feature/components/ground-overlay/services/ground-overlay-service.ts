import {MapService} from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { groundOverlayEventNames } from './event-names';
import { groupGroundOverlayProps } from './group-ground-overlay-props';
import {
  GroundOverlayEventName, 
  GroundOverlayEventHandler,
  GroundOverlayHandlerName,
  GroundOverlayProps,
  GroundOverlaySettings
} from '../';
import isEqual from 'lodash/isEqual';

export class GroundOverlayService extends EventableFeatureService<
  google.maps.GroundOverlay,
  GroundOverlayEventName,
  GroundOverlaySettings,
  GroundOverlayEventHandler,
  GroundOverlayHandlerName
> {
  constructor(
    google: Google,
    mapService: MapService,
    {
      bounds,
      url,
      ...props
    }: GroundOverlayProps
  ) {
    super(
      google, 
      mapService,
      new google.maps.GroundOverlay(
        url, 
        new google.maps.LatLngBounds(
          {lat: bounds.south, lng: bounds.west}, 
          {lat: bounds.north, lng: bounds.east}
        ),
        {map: mapService.getObject(), ...props}
      ),
      groupGroundOverlayProps({
        bounds,
        url,
        ...props
      }),
      groundOverlayEventNames,
      groupGroundOverlayProps,
    );
  }

  setOptions(props: GroundOverlaySettings | undefined) {
    if (!props) return;

    const {bounds, url} = props;

    if ('bounds' in props && !isEqual(bounds, this.options.bounds)) {
      const {north, east, south, west} = bounds;

      const latLngBounds = new this.google.maps.LatLngBounds(      
        {lat: south, lng: west}, 
        {lat: north, lng: east}
      );

      this.object.set('bounds', latLngBounds);
    }

    if ('url' in props) {
      this.object.set('url', url);
    }

    super.setOptions(props);
  }
}
