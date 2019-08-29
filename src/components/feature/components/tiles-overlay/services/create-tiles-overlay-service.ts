import { CreateServiceFunction } from "../../../hooks/create-use-feature";
import { TilesOverlayService } from "./tiles-overlay-service";
import { TilesOverlayProps } from "../tiles-overlay";

export const createPolylineService: CreateServiceFunction<
  TilesOverlayProps, 
  TilesOverlayService
> = (
  googleApi,
  mapService,
  {extendPayload, ...props},
) => {
  return new TilesOverlayService(googleApi, mapService, props, extendPayload);
}