import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Ratings } from '../../models/Ratings';


@Component({
  selector: 'app-ratings-form',
  templateUrl: './ratings-form.component.html',
  styleUrls: ['./ratings-form.component.css']
})
export class RatingsFormComponent implements OnInit {

  @Output() ratingsForm: EventEmitter<any> = new EventEmitter();


  radio: string = "rating";

  submitted = false;

  rating1: number;

  model = new Ratings(this.rating1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

  constructor() {
    this.model.rating1 = 1;
  }

  ngOnInit(): void {

  }

  onSubmit() {
      this.submitted = true;
  }

　radiotoggle(num, rate){
      switch (rate) {
        case '1':
              this.model.rating1 = num;
          break;
        case '2':
              this.model.rating2 = num;
          break;
        case '3':
              this.model.rating3 = num;
          break;
        case '4':
              this.model.rating4 = num;
        break;
        default:
          break;
      }

  }


  newRating() {
    this.model = new Ratings(this.rating1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
