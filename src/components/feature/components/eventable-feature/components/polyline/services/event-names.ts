import {featureEventNames} from '../../../services';
import {
	 PolylineEventNames 
	} from '../';

export const polylineEventNames: PolylineEventNames = {
	...featureEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
