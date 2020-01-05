import {filterObject} from '../../../../../services/maps-object';
import {
  InfoWindowEventHandler,
  InfoWindowHandlerName,
  InfoWindowSettings,
} from '..';

export interface SortedInfoWindowProps {
  options?: InfoWindowSettings;
  handlers?: {[key in InfoWindowHandlerName]: InfoWindowEventHandler};
}

export const groupInfoWindowProps = ({
  onCloseClick,
  onContentChanged,
  onDomReady,
  onPositionChanged,
  onZIndexChanged,
  ...options
}: InfoWindowSettings & {
  [key in InfoWindowHandlerName]?: InfoWindowEventHandler
}): SortedInfoWindowProps => {
  const result: SortedInfoWindowProps = {
    options,
  };

  const handlers = filterObject<InfoWindowEventHandler>({
    onCloseClick,
    onContentChanged,
    onDomReady,
    onPositionChanged,
    onZIndexChanged,
  });

  if (handlers) {
    result.handlers = handlers as {
      [key in InfoWindowHandlerName]: InfoWindowEventHandler
    };
  }

  return result;
};
