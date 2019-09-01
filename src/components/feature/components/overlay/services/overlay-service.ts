import {MapService} from '../../../../map';
import { EventlessFeatureService } from '../../../services/eventless-feature-service';

export class OverlayService extends EventlessFeatureService<
  google.custom.OverlayOptions,
  google.custom.Overlay
> {
  constructor(
    googleApi: Google,
    mapService: MapService,
    options: google.custom.OverlayOptions,
  ) {
    super(
      googleApi, 
      mapService,
      new googleApi.custom.Overlay({
        map: mapService.getObject(),
        ...options
      }), 
      options
    );
  }

  getContainer(): HTMLDivElement | void {
    return this.object.getContainer();
  }
}
