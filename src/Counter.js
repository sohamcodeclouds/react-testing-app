import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(1)
  const [isDisabled, setIsDisabled] = useState(false)

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }

  useEffect(() => {
    console.log('isDisabled', isDisabled, 'counter', counter)
    if (counter === 0) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [counter, isDisabled])

  return (
    <>
      <button data-testid='increment' onClick={incrementCounter}>
        +
      </button>
      <p data-testid='counter'>{counter}</p>
      <button
        data-testid='decrement'
        onClick={decrementCounter}
        disabled={isDisabled}
      >
        -
      </button>
    </>
  )
}

export default Counter
