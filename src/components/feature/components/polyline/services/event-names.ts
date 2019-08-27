import {featureEventNames} from '../../../services/eventable-feature-service';
import {
	 PolylineEventNames 
	} from '..';

export const polylineEventNames: PolylineEventNames = {
	...featureEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
