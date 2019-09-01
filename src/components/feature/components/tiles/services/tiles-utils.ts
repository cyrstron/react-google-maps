import { TilePayload } from "./tiles-service";

export function tileToKey({
  tileCoord: {x, y}, 
  zoom,
} : TilePayload): string {
  return `${x}-${y}-${zoom}`;
}