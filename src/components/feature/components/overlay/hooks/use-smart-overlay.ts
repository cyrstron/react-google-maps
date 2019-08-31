import { createUseFeature, createUseUpdateFeature } from "components/feature/hooks";
import { OverlayService, createOverlayService } from "../services";

export const useOverlay = createUseFeature<
google.custom.OverlayOptions, 
OverlayService
>(createOverlayService);

export const useUpdateOverlay = createUseUpdateFeature<google.custom.OverlayOptions>();

export const useSmartOverlay = (
  props: google.custom.OverlayOptions
): OverlayService | undefined => {
  const [service, setProps] = useOverlay();

  useUpdateOverlay(props, setProps);

  return service;
}