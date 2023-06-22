import React, { useState } from 'react'

import { Content, Drawer, Footer, Header } from './components'

export const BasicDrawer = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow((prev) => !prev)
  return (
    <>
      <div>
        <button
          type='button'
          style={{ zIndex: 1 }}
          data-testid='action-button'
          onClick={toggleShow}
        >
          Show Overlay
        </button>
      </div>
      <Drawer open={show} onClose={toggleShow}>
        <Header onClose={toggleShow}>Drawer Header</Header>
        <Content style={{ width: '10rem' }}>Drawer Content</Content>
        <Footer>
          <button
            type='button'
            style={{ marginRight: '0.5rem' }}
            onClick={toggleShow}
          >
            Cancel
          </button>
          <button type='button' onClick={toggleShow}>
            Save
          </button>
        </Footer>
      </Drawer>
    </>
  )
}
