import {MapService} from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { groundOverlayEventNames } from './event-names';
import { groupGroundOverlayProps } from './group-ground-overlay-props';
import {
  GroundOverlayEventName, 
  GroundOverlayEventHandler,
  GroundOverlayHandlerName
} from '../';

export class GroundOverlayService extends EventableFeatureService<
  google.maps.GroundOverlay,
  GroundOverlayEventName,
  google.maps.GroundOverlayOptions,
  GroundOverlayEventHandler,
  GroundOverlayHandlerName
> {
  constructor(
    google: Google,
    mapService: MapService,
    props: google.maps.GroundOverlayOptions & {
      [key in GroundOverlayHandlerName]?: GroundOverlayEventHandler;
    }
  ) {
    super(
      google, 
      mapService,
      new google.maps.GroundOverlay('', new google.maps.LatLngBounds(), {map: mapService.getObject(), ...props}),
      groupGroundOverlayProps(props),
      groundOverlayEventNames,
      groupGroundOverlayProps,
    );
  }
}
