import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = '';
  public name3 = '';
  public name2 = '';
  public formdata = new FormGroup({
    name2: new FormControl()
  });

  constructor() {

  }


  onClickSubmit(data) {
    this.name2 = data.name2;
  }
}
