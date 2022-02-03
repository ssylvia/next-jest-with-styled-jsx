import { render, screen } from '@testing-library/react'
import ResolveTest from '@/components/resolve-test'

describe('Home', () => {
  it('renders a heading', () => {
    render(<ResolveTest />)

    const p = screen.queryByText('Component with CSS Resolve')

    expect(p).toBeInTheDocument()
  })
})
