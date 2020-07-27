import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  output: number;
  firstNumber: number;
  secondNumber: number;
  operator: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFirstChange(value) {
    this.firstNumber = +value;
  }

  onSecondChange(value) {
    this.secondNumber = +value;
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.output = this.firstNumber - this.secondNumber;
        break;
      case 'X':
        this.output = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.output = this.firstNumber / this.secondNumber;
        break;
    }
  }


}
