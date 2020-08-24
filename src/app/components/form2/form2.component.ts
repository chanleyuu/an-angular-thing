import { Component, OnInit } from '@angular/core';

import { Form2Results } from '../../models/form2-results'
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }

  submitted = false;

  model = new Form2Results("Andrew Ryan", "02/03/2004", "10:20", false, 0, null, null, false, null, null, 0, false, null, null, 0, false, null, null, 0, false, 0, null, null);

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

}
