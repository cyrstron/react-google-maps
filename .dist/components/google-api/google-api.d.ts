import { ReactNode, ComponentType } from 'react';
import { GoogleApiProps } from './services/google-api-service';
export declare type GoogleProps = GoogleApiProps & {
    children: ReactNode;
    ErrorMessage?: ComponentType<{
        error: Error;
    }>;
    Loader?: ComponentType<{}>;
};
export interface GoogleState {
    isPending: boolean;
    googleApi?: Google;
    err: Error | null;
}
declare const GoogleApiProvider: ({ children, ErrorMessage, Loader, ...props }: GoogleProps) => JSX.Element | null;
export { GoogleApiProvider };
