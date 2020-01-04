/// <reference types="react" />
export interface GoogleState {
    isPending: boolean;
    googleApi?: Google;
    err: Error | null;
}
export declare const GoogleApiCtxProvider: import("react").ProviderExoticComponent<import("react").ProviderProps<Google | undefined>>;
export declare function useGoogleCtx(): Google | undefined;
