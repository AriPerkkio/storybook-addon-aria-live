import React from 'react';
import { useAddonState, useChannel } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { STORY_CHANGED } from '@storybook/core-events';
import { styled } from '@storybook/theming';
import type { PolitenessSetting } from 'aria-live-capture';

import { ADDON_ID, EVENTS } from './constants';

interface Announcement {
  textContent: string;
  politenessSetting: PolitenessSetting;
}

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin: 0.5rem 0;
`;

const PolitenessLabel = styled.span<Announcement>`
  font-weight: 600;
  text-transform: uppercase;
  padding-right: 0.5rem;
  color: ${(props) =>
    props.politenessSetting === 'assertive' ? 'red' : 'blue'};
`;

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
      <List>
        {captures.map((capture, index) => (
          <ListItem key={index}>
            <PolitenessLabel {...capture}>
              [{capture.politenessSetting}]
            </PolitenessLabel>{' '}
            {capture.textContent}
          </ListItem>
        ))}
      </List>
    </AddonPanel>
  );
};
