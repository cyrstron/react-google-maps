import {
  CustomOverlay as CustomOverlayWrapped, 
  CustomOverlayProps
} from './custom-overlay';
import {
  withDumbOverlayCtx,
  withFullOverlayCtx,
  withSmartOverlayCtx,
  withCreateDumbOverlayCtx,
} from './hocs';
export {CustomOverlayService} from './services';

export const CustomOverlay = withFullOverlayCtx<CustomOverlayProps>(CustomOverlayWrapped);
export const DumbCustomOverlay = withCreateDumbOverlayCtx<
  CustomOverlayProps
>(CustomOverlayWrapped);

export {
  withDumbOverlayCtx,
  withSmartOverlayCtx,
}
