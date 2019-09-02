import {featureEventNames} from '../../../services/eventable-feature-service';
import { RectangleEventNames } from '../';

export const polygonEventNames: RectangleEventNames = {
	...featureEventNames,
	onBoundChanged: 'bounds_changed',
};
