import {MapService} from '../../../../map';
import { FeatureService } from '../../../services';
import { polygonEventNames } from './event-names';
import { groupPolygonProps } from './group-polygon-props';

export class PolygonService extends FeatureService<
  google.maps.Polygon,
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler
> {
  constructor(
    google: Google,
    mapService: MapService,
    options: google.maps.PolygonOptions & PolygonEventsProps,
  ) {
    super(
      google, 
      mapService,
      new google.maps.Polygon({map: mapService.getObject(), ...options})
    );

    const {handlers} = this.groupProps(options);

    this.setListeners(handlers);
  }

  eventNames = polygonEventNames;
  groupProps = groupPolygonProps;
}
