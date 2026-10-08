import { useState } from 'react'
import './App.css'

function CalcDisplay({ dispValue }) {
  return (
    <div
      className={`CalcDisplay ${
        dispValue === 'Joefer Miguel Tulabut'
          ? 'NameDisplay'
          : ''
      }`}
    >
      {dispValue}
    </div>
  )
}

function CalcButtons({
  label,
  buttonClassName = 'CalcButton',
  onClick
}) {
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

function App() {

  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)

  // NUMBER BUTTON
  const onNumberClick = (e) => {
    e.preventDefault()

    const value = e.currentTarget.innerHTML

    if (display === 'Error') {
      setDisplay(value)
      setFirstNumber(Number(value))
      setOperator(null)
      setSecondNumber(null)
      return
    }

    if (operator !== null) {
      setSecondNumber(Number(value))
    } else {
      setFirstNumber(Number(value))
    }

    setDisplay(value)
  }

  // OPERATOR BUTTON
  const onOperatorClick = (e) => {
    e.preventDefault()

    const value = e.currentTarget.innerHTML

    if (firstNumber === null) {
      return
    }

    setOperator(value)
    setSecondNumber(null)
    setDisplay(value)
  }

  // EQUAL BUTTON
  const onEqualClick = (e) => {
    e.preventDefault()

    if (
      firstNumber === null ||
      operator === null ||
      secondNumber === null
    ) {
      return
    }

    const result = calculate(
      firstNumber,
      operator,
      secondNumber
    )

    setDisplay(result)

    if (result !== 'Error') {
      setFirstNumber(Number(result))
    }

    setOperator(null)
    setSecondNumber(null)
  }

  // CLEAR BUTTON
  const onClearClick = (e) => {
    e.preventDefault()

    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
    setSecondNumber(null)
  }

  // NAME BUTTON
  const onNameClick = () => {
    setDisplay('Joefer Miguel Tulabut')
  }

  // CALCULATION
  const calculate = (
    first,
    operation,
    second
  ) => {

    let result

    if (operation === '+') {
      result = first + second
    }

    else if (operation === '-') {
      result = first - second
    }

    else if (operation === '*') {
      result = first * second
    }

    else if (operation === '÷') {

      if (second === 0) {
        return 'Error'
      }

      result = first / second
    }

    return Number(
      result.toFixed(10)
    ).toString()
  }

  return (
    <div className='App'>

      <div className='Header'>
        <div>
          Calculator of Joefer Miguel Tulabut
        </div>

        <div className='Section'>
          DA3A
        </div>
      </div>

      <div className='Calculator'>

        <CalcDisplay
          dispValue={display}
        />

        <div className='CalcButtons'>

          <CalcButtons
            label='7'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='8'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='9'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='÷'
            onClick={onOperatorClick}
          />

          <CalcButtons
            label='4'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='5'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='6'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='*'
            onClick={onOperatorClick}
          />

          <CalcButtons
            label='1'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='2'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='3'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='-'
            onClick={onOperatorClick}
          />

          <CalcButtons
            label='C'
            buttonClassName='ClearButton'
            onClick={onClearClick}
          />

          <CalcButtons
            label='0'
            onClick={onNumberClick}
          />

          <CalcButtons
            label='+'
            onClick={onOperatorClick}
          />

          <CalcButtons
            label='='
            buttonClassName='EqualButton'
            onClick={onEqualClick}
          />

        </div>

        <button
          className='NameButton'
          onClick={onNameClick}
        >
          Tulabut
        </button>

      </div>

    </div>
  )
}

export default App


