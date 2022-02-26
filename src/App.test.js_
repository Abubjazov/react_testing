import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

describe('CLICK EVENT', () => {
  test('App - fire event', () => {
    render(<App />)

    const btn = screen.getByText(/kick me/i)
    const toggleElem = () => screen.queryByTestId('toggle-element')

    expect(toggleElem()).toBeNull()
    fireEvent.click(btn)
    expect(toggleElem()).toBeInTheDocument()
    fireEvent.click(btn)
    expect(toggleElem()).toBeNull()
  })
})

describe('INPUT EVENT', () => {
  test('App - fire event', () => {
    render(<App />)

    const input = screen.getByPlaceholderText(/input value/i)
    const inputElem = () => screen.queryByTestId('input-element')
    expect(inputElem()).toContainHTML('input value...')

    // fireEvent.input(input, {
    //   target: {value: 'qwerty123'}
    // })

    userEvent.type(input, 'qwerty123')
    expect(inputElem()).toContainHTML('qwerty123')
  })
})
