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

  handlers: {[key in MapsObjectHandlerName]?: MapsObjectEventHandler};
  options: MapsObjectOptions;

  listeners: Map<MapsObjectEventHandler, google.maps.MapsEventListener> = new Map();

  constructor(
    google: Google,
    object: MapsObject, {
    options,
    handlers,
  }: {
    options?: MapsObjectOptions,
    handlers?: {[key in MapsObjectHandlerName]: MapsObjectEventHandler},
  }) {
    this.google = google;
    this.maps = google.maps;
    this.object = object;
    this.options = options || {} as MapsObjectOptions;
    this.handlers = handlers || {};

    this.setHandlers(handlers);
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

  addHandler(    
    handlerName: MapsObjectHandlerName,
    handler: MapsObjectEventHandler,
  ) {
    this.handlers[handlerName as MapsObjectHandlerName] = handler;

    const eventName = this.eventNames[handlerName];

    this.addListener(eventName, handler);
  }

  removeHandler(    
    handlerName: MapsObjectHandlerName,
    handler: MapsObjectEventHandler,
  ) {
    this.handlers[handlerName as MapsObjectHandlerName] = undefined;

    this.removeListener(handler);
  }

  resetHandlers() {
    this.handlers = {};
    this.resetListeners();
  }

  private addListener(
    eventName: MapsObjectEventName,
    handler: MapsObjectEventHandler,
  ) {
    const listener = this.object.addListener(eventName, handler);

    this.listeners.set(handler, listener);
  }

  private removeListener(
    handler: MapsObjectEventHandler,
  ): void {
    const listener = this.listeners.get(handler);

    if (!listener) return;

    listener.remove();
    this.listeners.delete(handler);
  }

  private resetListeners(): void {
    this.listeners.forEach((listener) => {
      listener.remove();
    });

    this.listeners = new Map();
  }

  setOptions(options: MapsObjectOptions | undefined) {
    if (!options || !this.object.setOptions) return;

    this.options = {
      ...this.options,
      options
    };

    this.object.setOptions(options);
  }

  setHandlers(handlers: {
    [key in MapsObjectHandlerName]: MapsObjectEventHandler;
  } | undefined) {
    if (!handlers) return;

    (Object.keys(handlers)).forEach((handlerName) => {
      const handler: MapsObjectEventHandler = handlers[handlerName as MapsObjectHandlerName];

      this.addHandler(handlerName as MapsObjectHandlerName, handler);
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
    this.setHandlers(handlers);
  }

  updateProps(
    props: MapsObjectOptions & {
      [key in MapsObjectHandlerName]?: MapsObjectEventHandler;
    }
  ) {
    const {
      options, 
      handlers
    } = this.groupProps(props);
    
    this.updateOptions(options);
    this.updateHandlers(handlers);
  }

  updateOptions(
    options: MapsObjectOptions & {
      [key: string]: any,
    } | undefined,
  ) {
    if (!this.options || !options) return;

    const updatedOptions = pickUpdated<MapsObjectOptions>(this.options, options);

    if (!updatedOptions) return;

    this.setOptions(updatedOptions);
  }

  updateHandlers(
    handlers: {
      [key in MapsObjectHandlerName]: MapsObjectEventHandler;
    } | undefined,
  ): void {
    if (!handlers && !this.handlers) return;

    if (!handlers) {
      this.resetHandlers();
      return;
    }

    if (!this.handlers) {
      this.setHandlers(handlers);
      return;
    }

    Object.keys({
      ...this.handlers,
      ...handlers,
    }).forEach((handlerName) => {
      const handler = handlers[handlerName as MapsObjectHandlerName];
      const prevHandler = this.handlers[handlerName as MapsObjectHandlerName];

      if (handler === prevHandler) return;

      if (prevHandler) {
        this.removeHandler(handlerName as MapsObjectHandlerName, prevHandler);
      }
      if (handler) {
        this.addHandler(handlerName as MapsObjectHandlerName, handler);
      }
    });
  }

  unmount(): void {
    this.resetHandlers();
  }
}
