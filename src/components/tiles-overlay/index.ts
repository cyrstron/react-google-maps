import {
  TilesOverlay as TilesOverlayWrapped, 
  TilesOverlayProps
} from './tiles-overlay';
import {
  withDumbTilesCtx,
  withFullTilesCtx,
  withSmartTilesCtx,
  withCreateDumbTilesCtx,
} from './hocs';
export {TilesOverlayService} from './services';

export const TilesOverlay = withFullTilesCtx<TilesOverlayProps>(TilesOverlayWrapped);
export const DumbTilesOverlay = withCreateDumbTilesCtx<
  TilesOverlayProps
>(TilesOverlayWrapped);

export {
  withDumbTilesCtx,
  withSmartTilesCtx,
}
