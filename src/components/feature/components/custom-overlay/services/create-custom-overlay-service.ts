import { CreateServiceFunction } from "../../../hooks/create-use-feature";
import { CustomOverlayService } from "./custom-overlay-service";

export const createCustomOvelayService: CreateServiceFunction<
  google.custom.CustomOverlayOptions, 
  CustomOverlayService
> = (
  googleApi,
  mapService,
  props,
) => {
  return new CustomOverlayService(googleApi, mapService, props);
}