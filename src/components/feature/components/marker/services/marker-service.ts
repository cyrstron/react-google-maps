import {MapService} from '../../../../map';
import {FeatureService} from '../../../services';
import { markerEventNames } from './event-names';
import { groupMarkerProps } from './group-marker-props';

export class MarkerService extends FeatureService<
  google.maps.Marker,
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler
> {
  constructor(
    google: Google,
    mapService: MapService,
    options: google.maps.MarkerOptions & MarkerEventsProps,
  ) {
    super(
      google, 
      mapService,
      new google.maps.Marker({map: mapService.getObject(), ...options})
    );

    const {handlers} = this.groupProps(options);

    this.setListeners(handlers);
  }

  eventNames = markerEventNames;
  groupProps = groupMarkerProps;
}
