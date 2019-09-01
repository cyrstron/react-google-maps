import { createUseCreateFeatureCtx, createUseFeatureCtx } from "../../../hooks";
import { OverlayService } from "../services";

export const useCreateOverlayCtx = createUseCreateFeatureCtx<
  google.custom.OverlayOptions
>();

export const useOverlayCtx = createUseFeatureCtx<
  OverlayService
>();

export const useDumbOverlay = (
  props: google.custom.OverlayOptions
): OverlayService | undefined => {
  useCreateOverlayCtx(props);

  const service = useOverlayCtx();

  return service;
}