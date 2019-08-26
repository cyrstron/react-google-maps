import { FeatureService } from "../services";
import { MapService, useMapCtx } from "components/map";
import { useGoogleCtx } from "components/google-api";
import { useState, useEffect } from "react";

export type FeatureServiceContructor<
  EventName,
  Options,
  Handler,
  HandlerName extends string 
> = new(
  googleApi: Google, 
  mapService: MapService, 
  options: Options
) => FeatureService<
  EventName, 
  Options, 
  Handler, 
  HandlerName
>;

export const useFeature = <
  EventName,
  Options,
  Handler,
  HandlerName extends string 
>(
  Service: FeatureServiceContructor<
    EventName,
    Options,
    Handler,
    HandlerName
  >
) => (): [
  FeatureService<
    EventName, 
    Options, 
    Handler, 
    HandlerName
  > | undefined,
  (props: Options & {[key in HandlerName]?: Handler}) => void
] => {
  const googleApi = useGoogleCtx();
  const mapService = useMapCtx();

  const [service, setService] = useState<FeatureService<
    EventName, 
    Options, 
    Handler, 
    HandlerName
  > | undefined>(undefined);

  useEffect(() => {
    return () => service && service.unmount();
  }, []);

  const setProps = (props: Options & {[key in HandlerName]?: Handler}) => {
    if (!mapService || !googleApi) return;

    if (!service) {
      const service = new Service(googleApi, mapService, props);

      setService(service);
    } else {
      service.updateProps(props);
    }
  }

  return [service, setProps];

}
