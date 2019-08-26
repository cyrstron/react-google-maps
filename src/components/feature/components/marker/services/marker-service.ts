import {MapService} from '../../../../map';
import {FeatureService} from '../../../services';
import { markerEventNames } from './event-names';
import { groupMarkerProps } from './group-marker-props';
import {
  MarkerEventName, 
  MarkerEventHandler,
  MarkerHandlerName
} from '../';

export class MarkerService extends FeatureService<
  google.maps.Marker,
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerHandlerName
> {
  constructor(
    google: Google,
    mapService: MapService,
    props: google.maps.MarkerOptions & {[key in MarkerHandlerName]?: MarkerEventHandler},
  ) {
    super(
      google, 
      mapService,
      new google.maps.Marker({map: mapService.getObject(), ...props}),
      groupMarkerProps(props)
    );
  }

  eventNames = markerEventNames;
  groupProps = groupMarkerProps;
}
