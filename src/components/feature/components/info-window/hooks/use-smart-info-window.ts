import { createUseFeature, createUseUpdateFeature } from "../../../hooks";
import { InfoWindowService, createInfoWindowService } from "../services";
import { InfoWindowSettings } from "..";

export const useInfoWindow = createUseFeature<
  InfoWindowSettings, 
  InfoWindowService
>(createInfoWindowService);

export const useUpdateInfoWindow = createUseUpdateFeature<
InfoWindowSettings
>();

export const useSmartInfoWindow = (
  props: InfoWindowSettings
): InfoWindowService | undefined => {
  const [service, setProps] = useInfoWindow();

  useUpdateInfoWindow(props, setProps);

  return service;
}