import {MapService} from '../../map/services';
import debounce from 'lodash/debounce';
import { tileToKey } from './tiles-overlay-utils';

export interface TilePayload {
  tileCoord: google.maps.Point,
  zoom: number,
}

export type UpdateTilesCallback = (tiles: Map<Node, TilePayload>) => void;

export class TilesOverlayService {
  object: google.custom.TilesOverlay;

  tiles = new Map<Node, TilePayload & {data?: any}>();
  tilesByKey: {[key: string]: Node | undefined} = {};
  tilesForAddByKey: {[key: string]: Node | undefined} = {};

  tilesForDelete: Node[] = [];
  tilesForAdd: Array<{
    node: Node,
    payload: TilePayload & {data?: any}
  }> = [];

  constructor(
    public google: Google,
    public mapService: MapService,
    public updateTiles: UpdateTilesCallback,
    options: google.custom.TilesOverlayOptions,
    public extendPayload?: (payload: TilePayload) => Promise<any>,
  ) {
    const {TilesOverlay} = google.custom;

    const map = mapService.getObject();
    const object = new TilesOverlay({
      map, 
      registerTile: this.registerTile,
      unregisterTile: this.unregisterTile,
      ...options
    });

    this.mapService = mapService;
    this.object = object;
  }

  registerTile = async (
    node: Node, 
    payload: TilePayload, 
  ) => {
    let extendedPayload: any | undefined;

    if (this.extendPayload) {
      extendedPayload = await this.extendPayload(payload);
    }

    const key = tileToKey(payload);

    const tileForAdd = this.tilesForAddByKey[key];

    if (tileForAdd) {
      this.tilesForAdd = this.tilesForAdd.filter(({node}) => node !== tileForAdd);
    }

    const addedTile = this.tilesByKey[key];

    if (addedTile) {
      this.unregisterTile(addedTile);
    }

    const fullPayload = {
      ...payload,
      data: extendedPayload
    }

    this.tilesForAdd.push({node, payload: fullPayload});

    this.recalcTiles();
  }

  unregisterTile = (node: Node) => {
    this.tilesForDelete.push(node);

    this.recalcTiles();
  }


  recalcTiles = debounce(() => {
    this.tilesForDelete.forEach((tile) => {
      this.tiles.delete(tile);
    });

    this.tilesForAdd.forEach(({node, payload}) => {
      this.tiles.set(node, payload);
    });
    
    this.tilesForDelete = [];
    this.tilesForAdd = [];    
    this.tilesForAddByKey = {};

    this.tilesByKey = {};

    const tileNodes = this.tiles.keys();
    
    for (const node of tileNodes) {
      const payload = this.tiles.get(node);

      if (!payload) continue;

      const key = tileToKey(payload);

      this.tilesByKey[key] = node;
    }

    this.updateTiles(this.tiles);
  }, 20);

  remove() {
    this.object.setMap(null);
  }
}
