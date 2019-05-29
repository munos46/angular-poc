import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sb-footer',
  templateUrl: './sb-footer.component.html'
})
export class SbFooterComponent {

  componentLocation = 'app/component/component-example/sb-footer/basic-footer/basic-footer.component';
  componentFiles: string[] = ['html', 'ts'];

}
