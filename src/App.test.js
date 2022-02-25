import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('TEST APP', () => {
  test('render App - root component', () => {
    render(<App />)

    const gwElem = screen.getByText(/goodby world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)

    expect(gwElem).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    expect(input).toMatchSnapshot()
  })

  test('render App - screen', async () => {
    render(<App />)

    const gwElem1 = screen.queryByText(/goodby2/i)
    expect(gwElem1).toBeNull()

    const gwElem2 = await screen.findByText(/data/i)
    expect(gwElem2).toBeInTheDocument()
  })
})
