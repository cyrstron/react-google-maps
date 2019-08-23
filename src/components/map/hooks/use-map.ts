import {useState, useEffect, useRef, Ref} from 'react';
import {useGoogleCtx} from '../../google-api';
import {MapService} from '../services';
import { MapProps } from '..';

export const useMap = (): [
  Ref<HTMLDivElement>,
  MapService | undefined,
  (props: MapProps) => void
] => {
  const ref = useRef<HTMLDivElement>(null);
  const googleApi = useGoogleCtx();
  const [service, setService] = useState<MapService | undefined>(undefined);

  useEffect(() => {
    return () => service && service.unmount();
  }, [ref.current]);
  
  const setProps = (props: MapProps) => {
    if (!ref.current || !googleApi) return;

    if (!service) {
      const service = new MapService(googleApi, ref.current, props);

      setService(service);
    } else {
      service.updateProps(props);
    }
  }

  return [ref, service, setProps];
}