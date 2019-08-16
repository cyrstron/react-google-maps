import {MapService} from '../../../../map';
import { FeatureService } from '../../../services';
import { polylineEventNames } from './event-names';
import { groupPolylineProps } from './group-polyline-props';
import { 
  PolylineEventsProps, 
  PolylineEventName, 
  PolylineEventHandler 
} from '../';

export class PolylineService extends FeatureService<
  google.maps.Polyline,
  PolylineEventName,
  google.maps.PolylineOptions,
  PolylineEventHandler
> {

  constructor(
    google: Google,
    mapService: MapService,
    options: google.maps.PolylineOptions & PolylineEventsProps,
  ) {
    super(
      google, 
      mapService,
      new google.maps.Polyline({map: mapService.getObject(), ...options})
    );

    const {handlers} = this.groupProps(options);

    this.setListeners(handlers);
  }

  eventNames = polylineEventNames;
  groupProps = groupPolylineProps;
}
