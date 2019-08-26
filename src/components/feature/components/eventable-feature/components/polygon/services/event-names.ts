import {featureEventNames} from '../../../services';
import { PolygonEventNames } from '../';

export const polygonEventNames: PolygonEventNames = {
	...featureEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
