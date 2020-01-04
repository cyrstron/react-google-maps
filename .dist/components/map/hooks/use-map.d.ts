import { Ref } from 'react';
import { MapService } from '../services';
import { MapProps } from '..';
export declare const useMap: () => [Ref<HTMLDivElement>, MapService | undefined, (props: MapProps) => void];
