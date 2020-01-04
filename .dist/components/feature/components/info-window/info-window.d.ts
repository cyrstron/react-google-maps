import { InfoWindowProps } from '.';
import { ReactNode } from 'react';
export declare type FullInfoWindowProps = InfoWindowProps & {
    children?: ReactNode;
};
declare const InfoWindow: ({ children, ...props }: FullInfoWindowProps) => import("react").ReactPortal | null;
export { InfoWindow };
