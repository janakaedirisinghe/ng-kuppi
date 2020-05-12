import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  isStudentOne = true;
  student = "Sdsd";

  students = [
    {
      name: 'john',
      age: 25
    },
    {
      name: 'john2',
      age: 23
    },
    {
      name: 'john3',
      age: 34
    }
  ];

  changeState() {
    this.isStudentOne = !this.isStudentOne
  }


}
