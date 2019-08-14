import {MapsObjectService} from '../../../services';
import {MapService} from '../../map';

export abstract class FeatureService<
  Feature extends google.maps.Feature<
    EventName,
    Options,
    EventHandler
  >,
  EventName,
  Options,
  EventHandler
> extends MapsObjectService<
  Feature,
  EventName,
  Options,
  EventHandler
> {
  mapService: MapService;
  constructor(
    google: Google,
    mapService: MapService,
    Object: new(options: Options) => Feature,
    options: Options & MapEventsProps,
  ) {
    super(google, new Object(options));

    this.mapService = mapService;

    const {handlers} = this.groupProps(options)

    this.setListeners(handlers);
  }

  remove() {
    this.object.setMap(null);
  }
}
