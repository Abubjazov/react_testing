import { render, screen } from '@testing-library/react'
import { App } from './App'

test('render App - root component', () => {
  render(<App />)
  const gwElem = screen.getByText(/goodby world/i)

  expect(gwElem).toBeInTheDocument()
})
