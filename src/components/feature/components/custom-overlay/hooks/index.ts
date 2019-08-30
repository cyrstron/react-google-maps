import { 
  createUseCreateFeatureCtx, 
  createUseFeatureCtx, 
  createUseFeature
} from "../../../hooks";
import { createCustomOvelayService, CustomOverlayService } from "../services";

export const useCustomOverlayService = createUseFeature<
  google.custom.CustomOverlayOptions, 
  CustomOverlayService
>(createCustomOvelayService);

export const useCreateCustomOverlayCtx = createUseCreateFeatureCtx<
  google.custom.CustomOverlayOptions
>();

export const useCustomOverlayCtx = createUseFeatureCtx<
  CustomOverlayService
>();
