import {featureEventNames} from '../../../services';
import { PolygonEventNames } from '../../polygon';

export const polygonEventNames: PolygonEventNames = {
	...featureEventNames,
	onMouseDown: 'mousedown',
	onMouseMove: 'mousemove',
	onMouseUp: 'mouseup'
};
