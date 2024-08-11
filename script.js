// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (!value) return;
  
        if (['+', '-', '*', '/'].includes(value)) {
          if (currentInput === '') return;
          if (previousInput !== '') {
            currentInput = evaluate(previousInput, currentInput, operator);
          }
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        } else if (value === '=') {
          if (currentInput === '' || previousInput === '') return;
          currentInput = evaluate(previousInput, currentInput, operator);
          operator = '';
          previousInput = '';
        } else {
          currentInput += value;
        }
  
        display.textContent = currentInput || previousInput || '0';
      });
    });
  
    clearButton.addEventListener('click', () => {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    });
  
    function evaluate(a, b, operator) {
      a = parseFloat(a);
      b = parseFloat(b);
      switch (operator) {
        case '+':
          return (a + b).toString();
        case '-':
          return (a - b).toString();
        case '*':
          return (a * b).toString();
        case '/':
          return (a / b).toString();
        default:
          return b;
      }
    }
  });
  