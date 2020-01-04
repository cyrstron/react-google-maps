export interface MapsObject<Options> {
    setOptions?: (options: Options) => void;
}
export declare abstract class MapsObjectService<MapsObjectOptions, MapObject extends MapsObject<MapsObjectOptions>> {
    google: Google;
    maps: google.Maps;
    object: MapObject;
    options: MapsObjectOptions;
    constructor(google: Google, object: MapObject, options?: MapsObjectOptions);
    setOptions(options: MapsObjectOptions | undefined): void;
    getObject(): MapObject;
    setProps(props: MapsObjectOptions): void;
    updateProps(props: MapsObjectOptions): void;
    updateOptions(options: (MapsObjectOptions & {
        [key: string]: any;
    }) | undefined): void;
    abstract unmount(): void;
}
