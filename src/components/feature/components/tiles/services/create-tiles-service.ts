import { CreateServiceFunction } from "../../../hooks/create-use-feature";
import { TilesService, SetTilesCallback, ExtendPayloadCallback } from "./tiles-service";

export interface CreateTilesServiceProps<ExtendedPayload = any> extends google.custom.TilesOptions {
  setTiles: SetTilesCallback<ExtendedPayload>,
  extendPayload?: ExtendPayloadCallback<ExtendedPayload>
};

export const createTilesService: CreateServiceFunction<
  CreateTilesServiceProps,
  TilesService
> = (
  googleApi,
  mapService,
  {extendPayload, setTiles, ...props}
) => {
  return new TilesService(googleApi, mapService, props, setTiles, extendPayload);
}