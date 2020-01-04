import { MapService } from '../../../../map';
import { EventlessFeatureService } from '../../../services/eventless-feature-service';
export declare class DomOverlayService extends EventlessFeatureService<google.custom.DomOverlayOptions, google.custom.DomOverlay> {
    constructor(googleApi: Google, mapService: MapService, options: google.custom.DomOverlayOptions);
    getContainer(): HTMLDivElement | void;
}
