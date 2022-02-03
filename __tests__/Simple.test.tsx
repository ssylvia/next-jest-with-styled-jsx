import { render, screen } from '@testing-library/react'
import Simple from '@/components/simple-styled-jsx'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Simple />)

    const p = screen.queryByText('Simple Styled JSX')

    expect(p).toBeInTheDocument()
  })
})
