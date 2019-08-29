import {useEffect} from 'react';

export const createUseUpdateFeature = <Props>() => (
  props: Props, 
  setProps: (props: Props) => void
): void => {
  useEffect(() => {
    setProps(props);
  }, Object.values(props));
};
