import { ReactNode, ComponentType } from 'react';
import { TilePayload } from './services/tiles-service';
import { TilesService, CreateTilesServiceProps, createTilesService } from './services';
import { withSmartFeatureCtx, withDumbFeatureCtx } from '../../hocs';

export type TilesProps = google.custom.TilesOptions & {
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

export {Tiles} from './tiles';
export {DumbTiles} from './dumb-tiles';

export const withSmartTilesCtx = withSmartFeatureCtx<
CreateTilesServiceProps, 
TilesService
>(createTilesService);

export const withDumbTilesCtx = withDumbFeatureCtx<
  CreateTilesServiceProps, 
  TilesService
>();

export {useTilesCtx} from './hooks';

export {TilesService};