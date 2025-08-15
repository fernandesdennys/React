import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];

      try {
        const n1 = parseFloat(values[0]);
        const n2 = parseFloat(values[1]);
        let resultado = n1;

        switch (currentOperation) {
          case '+':
            resultado = n1 + n2;
            break;
          case '-':
            resultado = n1 - n2;
            break;
          case '*':
            resultado = n1 * n2;
            break;
          case '/':
            resultado = n2 !== 0 ? n1 / n2 : NaN;
            break;
          default:
            break;
        }

        values[0] = resultado;

        if (isNaN(values[0]) || !isFinite(values[0])) {
          this.clearMemory();
          return;
        }
      } catch (e) {
        values[0] = this.state.values[0];
      }

      /* try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
        if (isNaN(values[0]) || !isFinite(values[0])) {
          this.clearMemory();
          return;
        }
      } catch (e) {
        values[0] = this.state.values[0];
      } */

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }
  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;
    const currenValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currenValue + n;
    this.setState({ displayValue, clearDisplay: false });
    if (n !== '.');
    const i = this.state.current;
    const newValue = parseFloat(displayValue);
    const values = [...this.state.values];
    values[i] = newValue;
    this.setState({ values });
    console.log(values);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
