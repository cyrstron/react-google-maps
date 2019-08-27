import React, {Component, ReactNode, ComponentType, Fragment} from 'react';
import {createPortal} from 'react-dom';
import {CreateServiceProps} from './hocs/with-full-tiles-ctx';
import { TilePayload } from './services/tiles-overlay-service';

export type TilesOverlayProps = google.custom.TilesOverlayOptions & {
  children?: (props: {
    tileCoord: google.maps.Point,
    zoom: number,
    width: number,
    height: number,
    data?: any,
  }) => ReactNode | null;
  TileComponent?: ComponentType<{
    tileCoord: google.maps.Point,
    zoom: number,
    width: number,
    height: number,
    data?: any,
  }>;  
  extendPayload?: (payload: TilePayload & {
    width: number,
    height: number,
  }) => Promise<any>,
  width: number,
  height?: number,
}

export type FullTilesOverlayProps = TilesOverlayProps & CreateServiceProps;

export interface TilesOverlayState {
  tiles: Map<Node, TilePayload & {data?: any}>;
}

export class TilesOverlay extends Component<
  FullTilesOverlayProps, 
  TilesOverlayState
> {

  constructor(props: FullTilesOverlayProps) {
    super(props);

    this.state = {
      tiles: new Map<Node, TilePayload>(),
    };
  }

  updateTiles = (tiles: Map<Node, TilePayload & {data?: any}>) => {
    this.setState({tiles});
  }

  async componentDidUpdate(
    _prevProps: FullTilesOverlayProps,
    prevState: TilesOverlayState,
  ) {
    const {
      extendPayload,
      tilesService,
    } = this.props;

    const {
      tiles,
    } = this.state;

    if (
      !extendPayload || 
      !tilesService ||
      tiles !== prevState.tiles
    ) return;

    tilesService.recalcData();
  }

  extendPayload = async (payload: TilePayload): Promise<any> => {
    const {
      extendPayload,
      width,
      height,
    } = this.props;

    if (!extendPayload) return undefined;

    return extendPayload({
      ...payload, 
      width, 
      height: height || width
    });
  }

  componentDidMount() {
    const {
      createTilesService,
      tilesService,
      children,
      TileComponent,
      extendPayload,
      ...options
    } = this.props;

    createTilesService(options, this.updateTiles, this.extendPayload);
  }

  componentWillUnmount() {
    const {
      tilesService,
    } = this.props;

    if (!tilesService) return;

    tilesService.remove();
  }

  render() {
    const {
      TileComponent,
      children,
      width,
      height,
    } = this.props;

    const {tiles} = this.state;

    const tileNodes = [...tiles.keys()];  
    
    return tileNodes.map((tile) => {
      const payload = tiles.get(tile);

      if (!payload) return null;

      let node: ReactNode;

      if (children) {
        node = children({
          ...payload,
          width: width,
          height: height || width,
        })
      } else if (TileComponent) {
        node = (                  
          <TileComponent
            {...payload}
            width={width}
            height={height || width}
          />
        )
      } else {
        node =  null;
      }

      const {tileCoord: {x, y}, zoom} = payload;

      return (
        <Fragment key={`${x}-${y}-${zoom}-${width}-${height || width}`}>
          {createPortal(node, tile as Element)}
        </Fragment>
    );
  });
  }
}
