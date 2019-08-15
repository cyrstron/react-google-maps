import {Map as MapWrapped} from './map';
import {withSmartMapCtx} from './hocs/with-smart-map-ctx';
import { withDumbCreateMapCtx } from './hocs/with-dumb-create-map-ctx';

export {withSmartMapCtx, withDumbCreateMapCtx};

export const DumbMap = withDumbCreateMapCtx<MapProps>(MapWrapped);
export const Map = withSmartMapCtx<MapProps>(DumbMap);

export {MapService} from './services';
export {withDumbMapCtx} from './hocs/with-dumb-map-ctx';
