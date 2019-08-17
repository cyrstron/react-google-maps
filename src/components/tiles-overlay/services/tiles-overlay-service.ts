import {MapService} from '../../map/services';
import debounce from 'lodash/debounce';

export interface TilePayload {
  tileCoord: google.maps.Point,
  zoom: number,
}

export type UpdateTilesCallback = (tiles: Map<Node, TilePayload>) => void;

export class TilesOverlayService {
  object: google.custom.TilesOverlay;

  tiles = new Map<Node, TilePayload>();

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
    this.tilesForAdd.push({node, payload});

    this.addRegisteredTiles();
  }

  unregisterTile = (node: Node) => {
    this.tilesForDelete.push(node);

    this.removeUnregisteredTiles();
  }

  addRegisteredTiles = debounce(() => {
    this.tilesForAdd.forEach(({node, payload}) => {
      this.tiles.set(node, payload);
    });
    
    this.tilesForAdd = [];

    this.updateTiles(this.tiles);
  }, 20);

  removeUnregisteredTiles = debounce(() => {
    this.tilesForDelete.forEach((tile) => {
      this.tiles.delete(tile);
    });
    
    this.tilesForDelete = [];

    this.updateTiles(this.tiles);
  }, 20);

  remove() {
    this.object.setMap(null);
  }
}
