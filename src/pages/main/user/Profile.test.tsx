import { render, screen } from '@testing-library/react'

import { Profile } from '@/pages/main'

describe('test Profile', () => {
  it('should st', async () => {
    render(<Profile />)
    expect(screen.getByText('loading')).toBeInTheDocument()
    await screen.findByText('65')
  })
})
