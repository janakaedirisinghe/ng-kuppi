import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kuppi';

  name = "janaka";
  student = {
    name: 'john',
    age: 25
  }

  inputValue = "sdasd";



  newValue ="new value";

  onClickHandle(value) {
    console.log(value)
  }
  onKeyPressed(value) {
    console.log(value)
  }

  redColor = 'red';
  hasError = false;

  classStyle = {
    'color' : 'blue',
    'font-size' : 'xx-large'
  }

  classObj = {
    'text-danger' : true,
    'text-large' : false
  }



}
