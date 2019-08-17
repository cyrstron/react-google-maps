import {MapService} from '../../map';
import { pickUpdated } from '../../../services';

export class CustomOverlayService {
  mapService: MapService;
  object: google.custom.CustomOverlay;

  constructor(
    google: Google,
    mapService: MapService,
    options: google.custom.CustomOverlayOptions,
  ) {
    const {CustomOverlay} = google.custom;

    const map = mapService.getObject();
    const object = new CustomOverlay({map, ...options});

    this.mapService = mapService;
    this.object = object;
  }

  getContainer(): HTMLDivElement | void {
    return this.object.getContainer();
  }

  remove() {
    this.object.setMap(null);
  }

  setOptions(options: google.custom.CustomOverlayOptions | undefined) {
    if (!options || !this.object.setOptions) return;

    this.object.setOptions(options);
  }

  updateOptions(
    prevOptions: google.custom.CustomOverlayOptions & {
      [key: string]: any,
    } | undefined,
    options: google.custom.CustomOverlayOptions & {
      [key: string]: any,
    } | undefined,
  ) {
    if (!prevOptions || !options) return;

    const updatedOptions = pickUpdated<google.custom.CustomOverlayOptions>(prevOptions, options);

    if (!updatedOptions) return;

    this.setOptions(updatedOptions);
  }
}
