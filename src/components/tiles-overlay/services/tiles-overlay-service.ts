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

  tiles = new Map<Node, TilePayload>();
  tilesByKey: {[key: string]: Node | undefined} = {};
  tilesForAddByKey: {[key: string]: Node | undefined} = {};

  tilesForDelete: Node[] = [];
  tilesForAdd: Array<{
    node: Node,
    payload: TilePayload
  }> = [];

  constructor(
    public google: Google,
    public mapService: MapService,
    public updateTiles: UpdateTilesCallback,
    options: google.custom.TilesOverlayOptions,
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

  registerTile = (node: Node, payload: TilePayload) => {
    const key = tileToKey(payload);

    const tileForAdd = this.tilesForAddByKey[key];

    if (tileForAdd) {
      this.tilesForAdd = this.tilesForAdd.filter(({node}) => node !== tileForAdd);
    }

    const addedTile = this.tilesByKey[key];

    if (addedTile) {
      this.unregisterTile(addedTile);
    }

    this.tilesForAdd.push({node, payload});

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
