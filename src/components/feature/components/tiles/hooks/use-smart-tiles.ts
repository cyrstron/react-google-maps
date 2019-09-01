import { createUseFeature, createUseUpdateFeature } from "../../../hooks";
import { TilesService, createTilesService, CreateTilesServiceProps } from "../services";
import { TilePayload, ExtendPayloadCallback } from "../services/tiles-service";
import { useTilesState } from "./use-tiles-state";

export const useTiles = createUseFeature<
  CreateTilesServiceProps, 
  TilesService
>(createTilesService);

export const useUpdateTiles = createUseUpdateFeature<CreateTilesServiceProps>();

export const useSmartTiles = <ExtendedPayload = any>(
  props: google.custom.TilesOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload>
  }
): Map<Node, TilePayload & {data?: ExtendedPayload}> => {
  const [service, setProps] = useTiles();

  const [tiles, setTiles] = useTilesState<ExtendedPayload>(service, props);

  useUpdateTiles({
    setTiles,
    ...props
  }, setProps);

  return tiles;
}