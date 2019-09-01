import { createBoundsUtils } from './bounds-utils';
import { createOverlayClass } from './overlay';
import { createTilesClass } from './tiles';

export const extendGoogleApi = (google: Google) => {
  const Overlay = createOverlayClass(google);
  const Tiles = createTilesClass(google);
  const boundsUtils = createBoundsUtils(google);

  google.custom = {
    Overlay,
    Tiles,
    ...boundsUtils,
  };
};
