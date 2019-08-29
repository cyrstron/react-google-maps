import { 
  createUseCreateFeatureCtx, 
  createUseFeatureCtx, 
  createUseSmartFeature
} from "../../../hooks";
import { createMarkerService, MarkerService } from "../services";
import { MarkerProps} from "..";

export const useSmartMarker = createUseSmartFeature<
  MarkerProps, 
  MarkerService
>(createMarkerService);

export const useCreateMarkerCtx = createUseCreateFeatureCtx<
  MarkerProps, 
  MarkerService
>();

export const useMarkerCtx = createUseFeatureCtx<
  MarkerService
>();
