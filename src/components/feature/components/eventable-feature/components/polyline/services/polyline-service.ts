import {MapService} from '../../../../../../map';
import { EventableFeatureService } from '../../../services';
import { polylineEventNames } from './event-names';
import { groupPolylineProps } from './group-polyline-props';
import {
  PolylineEventName, 
  PolylineEventHandler,
  PolylineHandlerName
} from '../../polyline';

export class PolylineService extends EventableFeatureService<
  google.maps.Polyline,
  PolylineEventName,
  google.maps.PolylineOptions,
  PolylineEventHandler,
  PolylineHandlerName
> {
  constructor(
    google: Google,
    mapService: MapService,
    props: google.maps.PolylineOptions & {[key in PolylineHandlerName]?: PolylineEventHandler}
  ) {
    super(
      google, 
      mapService,
      new google.maps.Polyline({map: mapService.getObject(), ...props}),
      groupPolylineProps(props),
    ); 
  }

  eventNames = polylineEventNames;
  groupProps = groupPolylineProps;
}
