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

  model = new Ratings(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
        case '5':
              this.model.rating5 = num;
          break;
        case '6':
              this.model.rating6 = num;
          break;
        case '7':
              this.model.rating7 = num;
          break;
        case '8':
              this.model.rating8 = num;
        break;
        case '9':
              this.model.rating9 = num;
          break;
        case '10':
              this.model.rating10 = num;
          break;
        default:
          break;
      }
      this.model.total = this.totals();
  }

  totals(): number {
    return Number(this.model.rating1) + Number(this.model.rating2) + Number(this.model.rating3) + Number(this.model.rating4) + Number(this.model.rating5) + Number(this.model.rating6) + Number(this.model.rating7) + Number(this.model.rating8) + Number(this.model.rating10);
  }

  newRating() {
    this.model = new Ratings(0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0);
  }
}
