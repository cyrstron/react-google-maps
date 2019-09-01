import { CreateServiceFunction } from "../../../hooks/create-use-feature";
import { OverlayService } from "./overlay-service";

export const createOverlayService: CreateServiceFunction<
  google.custom.OverlayOptions, 
  OverlayService
> = (
  googleApi,
  mapService,
  props,
) => {
  return new OverlayService(googleApi, mapService, props);
}