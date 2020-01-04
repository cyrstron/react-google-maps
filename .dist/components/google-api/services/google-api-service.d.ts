declare global {
    interface Window {
        google: Google;
    }
}
export interface GoogleApiOptions {
    apiKey: string;
    geometry?: boolean;
    drawing?: boolean;
    places?: boolean;
    visualization?: boolean;
    language?: string;
    region?: string;
    version?: string;
}
export interface GoogleLoadOptions {
    load: () => Promise<Google>;
}
export interface GoogleProxyOptions {
    proxy: string;
}
export declare type GoogleLoadSettings = GoogleApiOptions | GoogleLoadOptions | GoogleProxyOptions;
export declare type GoogleApiProps = GoogleLoadSettings & {
    custom?: boolean;
    extend?: (googleApi: Google) => void;
};
export declare class GoogleApiService {
    url?: string;
    proxy?: string;
    load?: () => Promise<Google>;
    custom: boolean;
    extend?: (googleApi: Google) => void;
    constructor({ custom, extend, ...props }: GoogleApiProps);
    loadApi(): Promise<Google>;
    extendApi(google: Google): void;
}
