import { TilesOverlayService} from "../services";
import { TilePayload, ExtendPayloadCallback } from "../services/tiles-overlay-service";
import { useState, useEffect } from "react";

export const useTilesOverlayState = <ExtendedPayload = any>(
  service: TilesOverlayService<ExtendedPayload> | undefined,
  props: google.custom.TilesOverlayOptions & {
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