import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

//estado inicial da calculadora
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}
export default class Calculator extends Component {
  state = {...initialState} //estado inicial da calculadora

  constructor(props) {
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  //limpar operação
  clearMemory() {
    this.setState({...initialState})
  }

  //colocar as operações
  setOperation(operation) {
    console.log(operation)
  }

  //adicionar dígito
  addDigit(n) {
    // verificação para impedir a adição de dois dígitos '.'
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    //limpar display
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay:false})

    //para armazenar os valores no values:[0, 0]
    if (n !== '.') {
      const i = this.state.current // índice do valor
      const newValue = parseFloat(displayValue) // converter para float
      const values = [...this.state.values] // novo array
      values[i] = newValue //adicionando novo valor
      this.setState({ values}) // array com os novos valores
    }

  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}