import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ratings } from '../../models/Ratings';

@Component({
  selector: 'app-ratings-form',
  templateUrl: './ratings-form.component.html',
  styleUrls: ['./ratings-form.component.css']
})
export class RatingsFormComponent implements OnInit {

  @Output() ratingsForm: EventEmitter<any> = new EventEmitter();


  submitted = false;

  model = new Ratings(1, 1, 1);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.submitted = true;
  }

  newRating() {
    this.model = new Ratings(0, 0, 0);
  }
}
