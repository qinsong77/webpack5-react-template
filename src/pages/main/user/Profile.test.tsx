import { render, screen } from '@testing-library/react'

import { Profile } from './Profile'

describe('test Profile', () => {
  it('should', async () => {
    render(<Profile />)
    expect(screen.getByText('loading')).toBeInTheDocument()
    expect(await screen.findByText('approved: available')).toBeInTheDocument()
  })
})
