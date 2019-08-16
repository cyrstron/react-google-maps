import { pickUpdated } from "./pick-updated";
import { MapsObjectHandlerName } from "../";

export abstract class MapsObjectService<
  MapsObject extends google.maps.MapsObject<
    MapsObjectEventName,
    MapsObjectOptions,
    MapsObjectEventHandler
  >,
  MapsObjectEventName,
  MapsObjectOptions,
  MapsObjectEventHandler
> {
  google: Google;
  maps: google.Maps;
  object: MapsObject;

  listeners: Map<MapsObjectEventHandler, google.maps.MapsEventListener> = new Map();

  constructor(
    google: Google,
    object: MapsObject,
  ) {
    this.google = google;
    this.maps = google.maps;
    this.object = object;
  }

  abstract eventNames: {
    [key in MapsObjectHandlerName]: MapsObjectEventName
  };
  
  abstract groupProps(props: MapsObjectOptions & {
    [key in MapsObjectHandlerName]?: MapsObjectEventHandler
  }): {
    handlers?: {
      [key in MapsObjectHandlerName]: MapsObjectEventHandler;
    },
    options?: MapsObjectOptions,
  };

  addListener(
    eventName: MapsObjectEventName,
    handler: MapsObjectEventHandler,
  ) {
    const listener = this.object.addListener(eventName, handler);

    this.listeners.set(handler, listener);
  }

  removeListener(
    handler: MapsObjectEventHandler,
  ): void {
    const listener = this.listeners.get(handler);

    if (!listener) return;

    listener.remove();
    this.listeners.delete(handler);
  }

  resetListeners(): void {
    this.listeners.forEach((listener) => {
      listener.remove();
    });

    this.listeners = new Map();
  }

  setOptions(options: MapsObjectOptions | undefined) {
    if (!options || !this.object.setOptions) return;

    this.object.setOptions(options);
  }

  setListeners(handlers: {
    [key in MapsObjectHandlerName]: MapsObjectEventHandler;
  } | undefined) {
    if (!handlers) return;

    (Object.keys(handlers)).forEach((handlerName) => {
      const handler: MapsObjectEventHandler = handlers[handlerName as MapsObjectHandlerName];
      const eventName: MapsObjectEventName = this.eventNames[
        handlerName as MapsObjectHandlerName
      ];

      this.addListener(eventName, handler);
    });
  }

  getObject(): MapsObject {
    return this.object;
  }

  setProps(props: MapsObjectOptions & {
    [key in MapsObjectHandlerName]?: MapsObjectEventHandler
  }) {
    const {
      handlers,
      options,
    } = this.groupProps(props);

    this.setOptions(options);
    this.setListeners(handlers);
  }

  updateProps(
    prevProps: MapsObjectOptions & {
      [key in MapsObjectHandlerName]?: MapsObjectEventHandler;
    },
    props: MapsObjectOptions & {
      [key in MapsObjectHandlerName]?: MapsObjectEventHandler;
    }
  ) {
    const {
      options, 
      handlers
    } = this.groupProps(props);
    
    const {
      options: prevOptions, 
      handlers: prevHandlers
    } = this.groupProps(prevProps);

    this.updateOptions(prevOptions, options);
    this.updateListeners(prevHandlers, handlers);
  }

  updateOptions(
    prevOptions: MapsObjectOptions & {
      [key: string]: any,
    } | undefined,
    options: MapsObjectOptions & {
      [key: string]: any,
    } | undefined,
  ) {
    if (!prevOptions || !options) return;

    const updatedOptions = pickUpdated<MapsObjectOptions>(prevOptions, options);

    if (!updatedOptions) return;

    this.setOptions(updatedOptions);
  }

  updateListeners(
    prevHandlers: {
      [key in MapsObjectHandlerName]: MapsObjectEventHandler;
    } | undefined,
    handlers: {
      [key in MapsObjectHandlerName]: MapsObjectEventHandler;
    } | undefined,
  ): void {
    if (!handlers && !prevHandlers) return;

    if (!handlers) {
      this.resetListeners();
      return;
    }

    if (!prevHandlers) {
      this.setListeners(handlers);
      return;
    }

    Object.keys({
      ...prevHandlers,
      ...handlers,
    }).forEach((handlerName) => {
      const eventName = this.eventNames[handlerName as MapsObjectHandlerName];
      const handler = handlers[handlerName as MapsObjectHandlerName];
      const prevHandler = prevHandlers[handlerName as MapsObjectHandlerName];

      if (handler === prevHandler) return;

      if (handler) {
        this.addListener(eventName, handler);
      }
      if (prevHandler) {
        this.removeListener(prevHandler);
      }
    });
  }
}
