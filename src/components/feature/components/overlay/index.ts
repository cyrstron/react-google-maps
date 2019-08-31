import { ReactNode } from 'react';

import { withSmartFeatureCtx, withDumbFeatureCtx } from 'components/feature/hocs';
import {OverlayService, createOverlayService} from './services';

export type OverlayProps = google.custom.OverlayOptions & {
  children?: ReactNode;
};

export {Overlay} from './overlay';
export {DumbOverlay} from './dumb-overlay';

export const withSmartPolylineCtx = withSmartFeatureCtx<
  google.custom.OverlayOptions,
  OverlayService
>(createOverlayService);

export const withDumbOverlayCtx = withDumbFeatureCtx<
  google.custom.OverlayOptions, 
  OverlayService
>();

export {useOverlayCtx} from './hooks';

export {OverlayService} from './services';
