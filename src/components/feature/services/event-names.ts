import {mapsObjectEventNames} from '../../../services';
import { FeatureEventNames } from '../types.d';

export const featureEventNames: FeatureEventNames = {
	...mapsObjectEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
  	