import { ReactNode } from 'react';
import { MapProps } from '.';
export declare type MapComponentProps = MapProps & {
    children?: ReactNode | null;
};
export declare type Props = MapComponentProps;
declare const Map: ({ children, className, ...props }: MapComponentProps) => JSX.Element;
export { Map };
