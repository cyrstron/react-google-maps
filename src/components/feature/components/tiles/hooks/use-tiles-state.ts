import { TilesService} from "../services";
import { TilePayload, ExtendPayloadCallback } from "../services/tiles-service";
import { useState, useEffect } from "react";

export const useTilesState = <ExtendedPayload = any>(
  service: TilesService<ExtendedPayload> | undefined,
  props: google.custom.TilesOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload>
  }
): [
  Map<Node, TilePayload & {data?: ExtendedPayload}>, 
  (tiles: Map<Node, TilePayload & {data?: ExtendedPayload}>) => void
] => {
  const [tiles, setTiles] = useState<
    Map<Node, TilePayload & {data?: ExtendedPayload}>
  >(new Map());

  const {extendPayload, ...effectProps} = props;
  
  useEffect(() => {
    if (!service || !extendPayload) return;

    service.recalcData();
  }, Object.values(effectProps));

  return [tiles, setTiles];
}