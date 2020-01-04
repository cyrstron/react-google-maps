interface DynamicKeysObj {
    [key: string]: any;
}
export declare function pickUpdated<T>(prevProps: T & DynamicKeysObj | undefined, props: T & DynamicKeysObj | undefined): T | void;
export {};
