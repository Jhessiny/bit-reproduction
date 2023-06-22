import React from 'react';
import { Portal } from './portal';

export const DefaultPortal = () => (
  <div
    style={{
      maxWidth: '18.75rem',
      border: '0.0625rem solid',
      maxHeight: '12.5rem',
      overflow: 'auto',
    }}
  >
    <h1>This content is rendered in the main DOM tree</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro, est
      ex quia itaque facere fugit necessitatibus aut enim. Nisi rerum quae,
      repellat in perspiciatis explicabo laboriosam necessitatibus eius
      pariatur.
    </p>

    <Portal>
      <div data-testid="portal-content">
        <h1>This content is rendered in a portal (another DOM tree)</h1>
        <p>
          Because of the portal, it can appear in a different DOM tree from the
          main one (by default a new element inside the body), even though it is
          part of the same React tree.
        </p>
      </div>
    </Portal>
  </div>
);
