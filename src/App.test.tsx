import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('render App', function () {
  it('should render App with name', function () {
    render(<App />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
