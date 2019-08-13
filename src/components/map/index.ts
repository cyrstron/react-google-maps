import {Map} from './map';
import {withSmartMapCtx} from './hocs/with-smart-map-ctx';
import { withDumbCreateMapCtx } from './hocs/with-dumb-create-map-ctx';

export {Map, withSmartMapCtx, withDumbCreateMapCtx};

export const DumbMap = withDumbCreateMapCtx<MapProps>(Map);
export const SmartMap = withSmartMapCtx<MapProps>(DumbMap);

export {MapService} from './services';
export {withDumbMapCtx} from './hocs/with-dumb-map-ctx';
