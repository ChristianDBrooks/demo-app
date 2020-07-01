import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-example',
  templateUrl: './stepper-example.component.html',
  styleUrls: ['./stepper-example.component.scss']
})
export class StepperExampleComponent implements OnInit {
  faCompleted: Boolean = false;
  rowCompleted: Boolean = false;
  eaCompleted: Boolean = false;
  stCompleted: Boolean = false;
  fdCompleted: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
