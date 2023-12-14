import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

//Test both increment and decrement
describe('It describes the counter functionality', () => {
  //test increment counter
  test('increment counter', () => {
    //render the component on virtual dom
    render(<Counter />)

    //select the element we want to intaract with
    const counter = screen.getByTestId('counter')
    const incrementCounter = screen.getByTestId('increment')

    //expect result to be incremented
    fireEvent.click(incrementCounter)
    expect(counter).toHaveTextContent('2')
  })
  //test decrement counter
  test('decrement counter', () => {
    //render the component
    render(<Counter />)

    //select the element we want to intaract with
    const counter = screen.getByTestId('counter')
    const decrementCounter = screen.getByTestId('decrement')

    //expect decrement
    fireEvent.click(decrementCounter)
    expect(counter).toHaveTextContent('0')
  })
})
