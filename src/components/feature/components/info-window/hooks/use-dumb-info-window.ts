import { createUseCreateFeatureCtx, createUseFeatureCtx } from "../../../hooks";
import { InfoWindowService } from "../services";
import { InfoWindowSettings } from "..";

export const useCreateInfoWindowCtx = createUseCreateFeatureCtx<
  InfoWindowSettings
>();

export const useInfoWindowCtx = createUseFeatureCtx<
  InfoWindowService
>();

export const useDumbInfoWindow = (
  props: InfoWindowSettings
): InfoWindowService | undefined => {
  useCreateInfoWindowCtx(props);

  const service = useInfoWindowCtx();

  return service;
}