import { createUseCreateFeatureCtx, createUseFeatureCtx } from "../../../hooks";
import { TilesService, CreateTilesServiceProps } from "../services";
import { TilePayload, ExtendPayloadCallback } from "../services/tiles-service";
import { useTilesState } from "./use-tiles-state";

export const useCreateTilesCtx = createUseCreateFeatureCtx<
  CreateTilesServiceProps
>();

export const useTilesCtx = createUseFeatureCtx<
  TilesService
>();

export const useDumbTiles = <ExtendedPayload = any>(
  props: google.custom.TilesOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload>
  }
): Map<Node, TilePayload & {data?: ExtendedPayload}> => {
  const service = useTilesCtx();

  const [tiles, setTiles] = useTilesState<ExtendedPayload>(service, props);

  useCreateTilesCtx({
    setTiles,
    ...props
  });

  return tiles;
}