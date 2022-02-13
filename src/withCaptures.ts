import { useEffect } from 'react';
import {
  StoryFn as StoryFunction,
  useChannel,
  useParameter,
} from '@storybook/addons';
import CaptureAnnouncements from 'aria-live-capture';

import { EVENTS } from './constants';

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
