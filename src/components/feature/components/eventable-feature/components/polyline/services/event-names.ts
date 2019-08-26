import {featureEventNames} from '../../../services';
import {
	 PolylineEventNames 
	} from '../../polyline';

export const polylineEventNames: PolylineEventNames = {
	...featureEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
