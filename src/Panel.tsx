import React from 'react';
import { useAddonState, useChannel } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { STORY_CHANGED } from '@storybook/core-events';
import { styled } from '@storybook/theming';
import type { PolitenessSetting } from 'aria-live-capture';

import { ADDON_ID, EVENTS } from './constants';

interface Announcement {
  textContent: string;
  politenessSetting: PolitenessSetting;
}

const Wrapper = styled.div`
  position: relative;
  max-height: 100%;
  overflow: auto;
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: 0;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 2;
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
      <Button
        onClick={() => setCaptures([])}
        title="Clear announcements"
        aria-label="Clear announcements"
      >
        <RestartIcon aria-hidden />
      </Button>

      <Wrapper>
        <List>
          {captures.map((capture, index) => (
            <ListItem
              key={index}
              ref={(ref) => {
                // Automatically scroll to last item
                if (ref && index === captures.length - 1) {
                  ref.scrollIntoView();
                }
              }}
            >
              <PolitenessLabel {...capture}>
                [{capture.politenessSetting}]
              </PolitenessLabel>{' '}
              {capture.textContent}
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </AddonPanel>
  );
};

// https://akveo.github.io/eva-icons/#/?searchKey=refresh&type=outline
function RestartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#029CFD">
      <g data-name="Layer 2">
        <g data-name="refresh">
          <rect width="24" height="24" opacity="0" />
          <path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" />
        </g>
      </g>
    </svg>
  );
}
