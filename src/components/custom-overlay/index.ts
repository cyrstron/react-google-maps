import {
  CustomOverlay as CustomOverlayWrapped, 
  CustomOverlayProps
} from './custom-overlay';
import {
  withDumbOverlayCtx,
  withFullOverlayCtx,
  withSmartOverlayCtx,
  withCreateDumbFeatureCtx,
} from './hocs';
export {CustomOverlayService} from './services';

export const CustomOverlay = withFullOverlayCtx<CustomOverlayProps>(CustomOverlayWrapped);
export const DumbCustomOverlay = withCreateDumbFeatureCtx<
  CustomOverlayProps
>(CustomOverlayWrapped);

export {
  withDumbOverlayCtx,
  withSmartOverlayCtx,
}
