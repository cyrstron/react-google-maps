export declare function filterObject<T>(obj: {
    [key: string]: T | undefined;
}): {
    [key: string]: T;
} | void;
