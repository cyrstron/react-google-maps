import {featureEventNames} from '../../../services/eventable-feature-service';
import { CircleEventNames } from '../';

export const polygonEventNames: CircleEventNames = {
	...featureEventNames,
	onCenterChanged: 'center_changed',
	onRadiusChanged: 'radius_changed',
};
