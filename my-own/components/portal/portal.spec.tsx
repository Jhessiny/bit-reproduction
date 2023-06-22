import React from 'react'

import { render, screen } from '@testing-library/react'

import { DefaultPortal } from './default-portal.composition'

describe('given a Portal', () => {
  it('should render the received children in the correct place', async () => {
    render(<DefaultPortal />)

    const portalContent = await screen.findByTestId('portal-content')

    expect(portalContent.parentElement.parentElement).toBe(document.body)
  })
})
