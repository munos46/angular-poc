import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-information',
  templateUrl: './car-information.component.html'
})
export class CarInformationComponent implements OnInit {

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
