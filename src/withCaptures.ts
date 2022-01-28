import { useEffect } from "react";
import { StoryFn as StoryFunction, useChannel } from "@storybook/addons";
import CaptureAnnouncements from "aria-live-capture";

import { EVENTS } from "./constants";

export function withCaptures(storyFn: StoryFunction) {
  const emit = useChannel({});

  useEffect(() => {
    const cleanup = CaptureAnnouncements({
      onCapture: function onCapture(textContent, politenessSetting) {
        emit(EVENTS.CAPTURE, { textContent, politenessSetting });
      },
    });

    return cleanup;
  }, []);

  // @ts-ignore TODO check issues
  return storyFn();
}
