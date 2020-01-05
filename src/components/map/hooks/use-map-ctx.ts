import {useContext} from 'react';
import {MapCtx} from '../hocs/with-smart-map-ctx';
import {MapService} from '../services';

export const useMapCtx = (
): MapService | undefined => {
  return useContext(MapCtx);
};
