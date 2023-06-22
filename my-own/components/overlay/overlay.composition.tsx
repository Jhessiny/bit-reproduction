import React, { useState } from 'react'

import { Overlay } from './overlay'

export const OverlayComposition = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow((prev) => !prev)
  return (
    <div>
      <button
        type='button'
        style={{ zIndex: 1 }}
        data-testid='action-button'
        onClick={toggleShow}
      >
        Show Overlay
      </button>
      <Overlay onClick={() => setShow(false)} open={show} />
    </div>
  )
}
