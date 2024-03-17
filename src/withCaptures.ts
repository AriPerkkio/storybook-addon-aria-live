import { useEffect, useChannel, useParameter } from '@storybook/preview-api';
import { PartialStoryFn as StoryFunction } from '@storybook/types';

import { EVENTS } from './constants';

// TODO: aria-live-capture should publish proper ESM build
import * as AriaLiveCapture from 'aria-live-capture';
const CaptureAnnouncements = unwrapPoorlyPublishedPackage(AriaLiveCapture);

export function withCaptures(storyFn: StoryFunction) {
  const { includeShadowDom } = useParameter('aria-live', {
    includeShadowDom: false,
  });

  const emit = useChannel({});

  useEffect(() => {
    const cleanup = CaptureAnnouncements({
      includeShadowDom,
      onCapture: function onCapture(textContent, politenessSetting) {
        emit(EVENTS.CAPTURE, { textContent, politenessSetting });
      },
    });

    return cleanup;
  }, [includeShadowDom]);

  // @ts-ignore TODO check issues
  return storyFn();
}

// Unwrap possible double-wrapped CJS package
function unwrapPoorlyPublishedPackage<T extends { default: unknown }>(
  pkg: T
): T['default'] {
  // @ts-expect-error
  return pkg.default?.default || pkg.default;
}
