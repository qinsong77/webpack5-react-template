import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { PaymentStrategy } from '../models/PaymentStrategy'
import { roundUpToNearestHundred, roundUpToNearestTen } from '../utils'

import { Payment } from './Payment'

describe('Payment', () => {
  it('renders payment title', () => {
    render(<Payment amount={0.0} />)
    expect(screen.getByText('Payment')).toBeInTheDocument()
  })

  it('shows me the total amount', () => {
    render(<Payment amount={19.9} />)
    expect(screen.getByText('$19.9')).toBeInTheDocument()
  })

  it('shows thanks when user selected donation', async () => {
    render(<Payment amount={19.9} />)

    const select = screen.getByText('I would like to donate $0.1 to charity.')
    expect(select).toBeInTheDocument()

    await userEvent.click(select)
    expect(screen.getByText('Thanks for your donation.')).toBeInTheDocument()
  })

  it('shows correct amount when user selected to donate', async () => {
    render(<Payment amount={19.9} />)

    const select = screen.getByText('I would like to donate $0.1 to charity.')
    expect(select).toBeInTheDocument()

    await userEvent.click(select)
    expect(screen.getByText('$20')).toBeInTheDocument()
  })

  describe('Japan market', () => {
    it('shows correct amount when user selected to donate', async () => {
      render(
        <Payment
          amount={3312}
          strategy={new PaymentStrategy('¥', roundUpToNearestHundred)}
        />
      )

      const select = screen.getByText('I would like to donate ¥88 to charity.')
      expect(select).toBeInTheDocument()

      await userEvent.click(select)
      expect(screen.getByText('¥3400')).toBeInTheDocument()
    })
  })

  describe('Denmark market', () => {
    it('shows correct amount when user selected to donate', async () => {
      render(
        <Payment
          amount={1.2}
          strategy={new PaymentStrategy('Kr.', roundUpToNearestTen)}
        />
      )

      const select = screen.getByText(
        'I would like to donate Kr.8.8 to charity.'
      )
      expect(select).toBeInTheDocument()

      await userEvent.click(select)
      expect(screen.getByText('Kr.10')).toBeInTheDocument()
    })
  })

  describe('payment methods from remote', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('shows all available payment methods', async () => {
      const methods = [{ name: 'apple' }, { name: 'google' }]

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(methods),
        })
      )

      render(<Payment amount={19.9} />)

      await waitFor(() => {
        expect(screen.getByText('Pay with apple')).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(screen.getByText('Pay with google')).toBeInTheDocument()
      })

      await waitFor(() => {
        expect(screen.getByText('Pay in cash')).toBeInTheDocument()
      })
    })
  })
})
