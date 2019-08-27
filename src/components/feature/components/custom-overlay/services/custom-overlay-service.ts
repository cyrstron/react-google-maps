import {MapService} from '../../../../map';
import { EventlessFeatureService } from '../../../services/eventless-feature-service';

export class CustomOverlayService extends EventlessFeatureService<
  google.custom.CustomOverlayOptions,
  google.custom.CustomOverlay
> {
  constructor(
    googleApi: Google,
    mapService: MapService,
    options: google.custom.CustomOverlayOptions,
  ) {
    super(
      googleApi, 
      mapService,
      new googleApi.custom.CustomOverlay({
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
