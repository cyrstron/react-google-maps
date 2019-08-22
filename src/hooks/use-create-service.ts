import {useState, useEffect} from 'react';

export interface MapsService<Props> {
  updateProps(nextProps: Props): void;
  unmount(): void;
}

export type MapServiceConstructor<
  Props extends [],
  Service extends MapsService<Props>, 
> = new(...props: Props) => Service

export type CreateMapServiceCallback<Props> = (props: Props) => void;

export const useCreateService = <
  Props extends [], 
  ServiceType extends MapsService<Props>
>(
  Service: MapServiceConstructor<Props, ServiceType>
) => (
  ...serviceProps: Props
): ServiceType | undefined => {
  const [service, setService] = useState<ServiceType | undefined>(undefined);

  useEffect(() => {
    setService(new Service(...serviceProps));

    return () => {
      service && service.unmount();
    }
  }, []);

  useEffect(() => {
    service && service.updateProps(serviceProps)
  }, serviceProps);

  return service;
}