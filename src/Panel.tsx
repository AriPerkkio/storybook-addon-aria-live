import React from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { STORY_CHANGED } from "@storybook/core-events";
import type { PolitenessSetting } from "aria-live-capture";

import { ADDON_ID, EVENTS } from "./constants";

interface Announcement {
  textContent: string;
  politenessSetting: PolitenessSetting;
}

export const Panel: React.FC<{ active: boolean }> = (props) => {
  const [captures, setCaptures] = useAddonState<Announcement[]>(ADDON_ID, []);

  useChannel({
    [EVENTS.CAPTURE]: (announcement: Announcement) => {
      setCaptures((previous) => [...previous, announcement]);
    },
    [STORY_CHANGED]: () => {
      // Reset captures after a story changes
      setCaptures([]);
    },
  });

  return (
    <AddonPanel {...props}>
      <ol>
        {captures.map((capture, index) => (
          <li key={index}>
            [{capture.politenessSetting.toUpperCase()}] {capture.textContent}
          </li>
        ))}
      </ol>
    </AddonPanel>
  );
};
