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
    object: Feature,
  ) {
    super(google, object);

    this.mapService = mapService;
  }

  remove() {
    this.object.setMap(null);
    this.resetListeners();
  }

  hide() {    
    this.object.setMap(null);
  }

  show() {    
    this.object.setMap(this.mapService.object);
  }
}
