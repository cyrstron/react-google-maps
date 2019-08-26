import {MapService} from '../../map';
import { MapsObjectService } from '../../../services/maps-object';

export class CustomOverlayService extends MapsObjectService<
  google.custom.CustomOverlayOptions,
  google.custom.CustomOverlay
> {
  mapService: MapService;

  constructor(
    googleApi: Google,
    mapService: MapService,
    options: google.custom.CustomOverlayOptions,
  ) {
    super(
      googleApi, 
      new googleApi.custom.CustomOverlay({
        map: mapService.getObject(),
        ...options
      }), 
      options
    );

    this.mapService = mapService;
  }

  getContainer(): HTMLDivElement | void {
    return this.object.getContainer();
  }

  remove() {
    this.object.setMap(null);
  }

  unmount() {
    this.remove();
  }
}
