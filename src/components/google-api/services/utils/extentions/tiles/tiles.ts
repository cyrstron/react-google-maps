export const createTilesClass = (google: Google): google.custom.TilesConstructor => {
  class Tiles implements google.custom.Tiles {
    registerTile?: (
      node: Node,      
      payload: {tileCoord: google.maps.Point, zoom: number}
    ) => void;
    unregisterTile?: (node: Node) => void;
    index: number;
    size: google.maps.Size;
    map: google.maps.Map | null = null;
    tagName: string;

    constructor({
      registerTile,
      unregisterTile,
      index,
      height,
      width,
      heightUnit,
      widthUnit,
      tagName,
      map,
    }: google.custom.TilesOptions & {
      registerTile?: (node: Node, payload: {tileCoord: google.maps.Point, zoom: number}) => void,
      unregisterTile?: (node: Node) => void,
    }) {
      this.index = index;
      this.tagName = tagName || 'div';
      this.registerTile = registerTile;
      this.unregisterTile = unregisterTile;

      this.size = this.calcTileSize({
        height,
        heightUnit,
        width,
        widthUnit,
      });

      this.setMap(map || null);
    }

    get tileSize(): google.maps.Size {
      return this.size;
    }

    set tileSize(size: google.maps.Size) {
      this.size = size;
    }

    getTile(
      tileCoord: google.maps.Point,
      zoom: number,
      ownerDocument: Document,
    ): Element | null {
      const container = ownerDocument.createElement(this.tagName);

      container.style.width = '100%';
      container.style.height = '100%';

      if (this.registerTile) {
        this.registerTile(container, {tileCoord, zoom});
      }

      return container;
    }

    releaseTile(tile: Node) {
      if (!this.unregisterTile) return;

      this.unregisterTile(tile);
    }

    onRegister(callback: (
      node: Node,      
      payload: {tileCoord: google.maps.Point, zoom: number}
    ) => void): void {
      this.registerTile = callback;
    }

    onUnregister(callback: (node: Node) => void): void {
      this.unregisterTile = callback;
    }

    setMap(map: google.maps.Map | null) {
      if (map === null || this.map !== map) {
        this.remove();
      }

      if (map) {
        map.overlayMapTypes.insertAt(this.index, this as google.maps.MapType);
      }

      this.map = map;
    }

    remove() {
      if (!this.map) return;

      this.map.overlayMapTypes.removeAt(this.index);
    }

    private calcTileSize({
      width,
      height,
      widthUnit,
      heightUnit,
    }: {
      width: number,
      height?: number,
      widthUnit?: string,
      heightUnit?: string,
    }) {
      if (widthUnit && heightUnit) {
        return new google.maps.Size(
          width,
          height || width,
          widthUnit,
          heightUnit,
        );
      } else {
        return new google.maps.Size(width, height || width);
      }
    }
  }

  return Tiles;
};