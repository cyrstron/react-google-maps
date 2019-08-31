import { CreateServiceFunction } from "../../../hooks/create-use-feature";
import { TilesService, SetTilesCallback } from "./tiles-service";
import { TilesProps } from "../tiles";

export const createPolylineService: CreateServiceFunction<
  TilesProps, 
  TilesService
> = (
  googleApi,
  mapService,
  {extendPayload, setTiles, ...props}: TilesProps & {setTiles: SetTilesCallback},
) => {
  return new TilesService(googleApi, mapService, props, extendPayload);
}