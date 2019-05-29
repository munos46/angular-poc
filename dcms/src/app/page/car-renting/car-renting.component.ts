import { Component, OnInit, HostBinding } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/services/carservice';

@Component({
  selector: 'app-car-renting',
  templateUrl: './car-renting.component.html'

})
export class CarRentingComponent implements OnInit {
  @HostBinding('attr.class') class = 'app-car-renting';

  title = 'sbng';
  expendedSearch = false;
  disabledSearch = true;

  msgsMainPage: Message[] = [];
  msgsSearchResults: Message[] = [];

  cars: Car[];
  cols: any[];

  selectedCar1: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.msgsMainPage.push({
      severity: 'warn',
      detail: 'This application is a demo. The filters are not working but you can click on search button to display the table.'
    });

    this.carService.getCarsMedium().then(cars => this.cars = cars);

    this.cols = [
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  triggerSearch() {
    this.expendedSearch = true;
    this.disabledSearch = false;

    this.msgsSearchResults = [];
    this.msgsSearchResults.push({ severity: 'warn', detail: 'The datatable generated is based on a mock service.' });
  }
}
