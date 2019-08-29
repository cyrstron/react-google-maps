import { 
  createUseCreateFeatureCtx, 
  createUseFeatureCtx, 
  createUseFeature
} from "../../../hooks";
import { createCustomOvelayService, CustomOverlayService } from "../services";

export const useSmartCustomOverlayService = createUseFeature<
  google.custom.CustomOverlay, 
  CustomOverlayService
>(createCustomOvelayService);

export const useCreateCustomOverlayCtx = createUseCreateFeatureCtx<
  google.custom.CustomOverlay, 
  CustomOverlayService
>();

export const useCustomOverlayCtx = createUseFeatureCtx<
  CustomOverlayService
>();
