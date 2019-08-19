import {MapService} from '../../map/services';
import debounce from 'lodash/debounce';
import { tileToKey } from './tiles-overlay-utils';

export interface TilePayload {
  tileCoord: google.maps.Point,
  zoom: number,
}

export type UpdateTilesCallback = (tiles: Map<Node, TilePayload>) => void;

export class TilesOverlayService<ExtendedPayload = any> {
  object: google.custom.TilesOverlay;
  isUnmounted: boolean = false;

  tiles = new Map<Node, TilePayload & {data?: ExtendedPayload}>();
  tilesByKey: {[key: string]: Node | undefined} = {};
  tilesForAddByKey: {[key: string]: Node | undefined} = {};

  tilesForDelete: Node[] = [];
  tilesForAdd: Array<{
    node: Node,
    payload: TilePayload & {data?: ExtendedPayload}
  }> = [];

  constructor(
    public google: Google,
    public mapService: MapService,
    public updateTiles: UpdateTilesCallback,
    options: google.custom.TilesOverlayOptions,
    public extendPayload: (payload: TilePayload) => Promise<ExtendedPayload>,
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
    let extendedPayload: ExtendedPayload | undefined;

    extendedPayload = await this.extendPayload(payload) as ExtendedPayload;

    const key = tileToKey(payload);
    const tileForAdd = this.tilesForAddByKey[key];

    if (tileForAdd) {
      this.tilesForAdd = this.tilesForAdd.filter(({node}) => node !== tileForAdd);
    }

    this.tilesForAddByKey[key] = node;

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

  async recalcData() {
    const nodes: Node[] = [];
    const dataPromises: Promise<ExtendedPayload>[] = [];

    for (const [node, {data, ...payload}] of this.tiles) {
      const dataPromise = this.extendPayload(payload)
      dataPromises.push(dataPromise);
      nodes.push(node);
    }

    const dataArray = await Promise.all(dataPromises);

    if (this.isUnmounted) return;

    const newTiles = new Map<Node, TilePayload & {data?: any}>();

    nodes.forEach((node, index) => {
      const data = dataArray[index];
      const value = this.tiles.get(node);

      if (!value) return;

      const {
        data: prevData, 
        ...payload
      } = value

      newTiles.set(node, {...payload, data})
    });

    this.updateTiles(newTiles);
  }

  recalcTiles = debounce(() => {
    const newTiles = new Map<Node, TilePayload & {data?: ExtendedPayload}>();

    for (const [node, payload] of this.tiles) {
      newTiles.set(node, payload);
    }

    this.tilesForDelete.forEach((tile) => {
      newTiles.delete(tile);
    });

    this.tilesForAdd.forEach(({node, payload}) => {
      newTiles.set(node, payload);
    });
    
    this.tilesForDelete = [];
    this.tilesForAdd = [];    
    this.tilesForAddByKey = {};

    this.tilesByKey = {};

    const tileNodes = newTiles.keys();
    
    for (const node of tileNodes) {
      const payload = newTiles.get(node);

      if (!payload) continue;

      const key = tileToKey(payload);

      this.tilesByKey[key] = node;
    }

    this.tiles = newTiles;
    this.updateTiles(newTiles);
  }, 20);

  remove() {
    this.object.setMap(null);
  }

  unmount() {
    this.remove();
    this.isUnmounted = true;
  }
}
