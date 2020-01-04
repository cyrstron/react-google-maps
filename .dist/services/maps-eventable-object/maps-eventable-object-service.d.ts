/// <reference types="googlemaps" />
import { MapsObjectService } from "../maps-object";
export declare abstract class MapsEventableObjectService<MapsObject extends google.maps.MapsObject<MapsObjectEventName, MapsObjectOptions, MapsObjectEventHandler>, MapsObjectEventName, MapsObjectOptions, MapsObjectEventHandler, HandlerName extends string> extends MapsObjectService<MapsObjectOptions, MapsObject> {
    eventNames: {
        [key in HandlerName]: MapsObjectEventName;
    };
    groupProps: (props: MapsObjectOptions & {
        [key in HandlerName]?: MapsObjectEventHandler;
    }) => {
        handlers?: {
            [key in HandlerName]: MapsObjectEventHandler;
        };
        options?: MapsObjectOptions;
    };
    handlers: {
        [key in HandlerName]?: MapsObjectEventHandler;
    };
    listeners: Map<MapsObjectEventHandler, google.maps.MapsEventListener>;
    constructor(google: Google, object: MapsObject, { options, handlers, }: {
        options?: MapsObjectOptions;
        handlers?: {
            [key in HandlerName]: MapsObjectEventHandler;
        };
    }, eventNames: {
        [key in HandlerName]: MapsObjectEventName;
    }, groupProps: (props: MapsObjectOptions & {
        [key in HandlerName]?: MapsObjectEventHandler;
    }) => {
        handlers?: {
            [key in HandlerName]: MapsObjectEventHandler;
        };
        options?: MapsObjectOptions;
    });
    addHandler(handlerName: HandlerName, handler: MapsObjectEventHandler): void;
    removeHandler(handlerName: HandlerName, handler: MapsObjectEventHandler): void;
    resetHandlers(): void;
    setHandlers(handlers: {
        [key in HandlerName]: MapsObjectEventHandler;
    } | undefined): void;
    setProps(props: MapsObjectOptions & {
        [key in HandlerName]?: MapsObjectEventHandler;
    }): void;
    updateProps(props: MapsObjectOptions & {
        [key in HandlerName]?: MapsObjectEventHandler;
    }): void;
    updateHandlers(handlers: {
        [key in HandlerName]: MapsObjectEventHandler;
    } | undefined): void;
    unmount(): void;
}
