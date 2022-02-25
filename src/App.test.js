import { render, screen } from '@testing-library/react'
import { App } from './App'

test('render App - root component', () => {
  render(<App />)

  const gwElem = screen.getByText(/goodby world/i)
  const btn = screen.getByRole('button')
  const input = screen.getByPlaceholderText(/input value/i)

  expect(gwElem).toBeInTheDocument()
  expect(btn).toBeInTheDocument()
  expect(input).toBeInTheDocument()

  expect(input).toMatchSnapshot()

  screen.debug()
})
