import {useState, useEffect} from 'react';
import {useGoogleCtx} from '../../google-api';
import {MapService} from '../../map/services';
import { useMapCtx } from 'components/map';

export interface FeatureService<Props> {
  updateProps: (props: Props) => void;
  unmount: () => void;
}

export const useFeature = <
  Props, 
  Service extends FeatureService<Props>
>(createService: (googleApi: Google, mapService: MapService) => Service): [
  Service | undefined,
  (props: Props) => void
] => {
  const googleApi = useGoogleCtx();
  const mapService = useMapCtx();
  
  const [service, setService] = useState<Service | undefined>(undefined);

  useEffect(() => {
    return () => service && service.unmount();
  }, []);
  
  const setProps = (props: Props) => {
    if (!googleApi || !mapService) return;

    if (!service) {
      const service = createService(googleApi, mapService);

      setService(service);
    } else {
      service.updateProps(props);
    }
  }

  return [service, setProps];
}