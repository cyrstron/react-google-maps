import {
  Tiles as TilesWrapped, 
  TilesProps
} from './tiles';
import {
  withDumbTilesCtx,
  withFullTilesCtx,
  withSmartTilesCtx,
  withCreateDumbTilesCtx,
} from './hocs';
export {TilesService} from './services';

export const Tiles = withFullTilesCtx<TilesProps>(TilesWrapped)

export const DumbTiles = withCreateDumbTilesCtx<
  TilesProps
>(TilesWrapped);

export {
  withDumbTilesCtx,
  withSmartTilesCtx,
}
