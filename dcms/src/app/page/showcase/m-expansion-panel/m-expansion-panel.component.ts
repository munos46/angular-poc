import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-expansion-panel',
  templateUrl: './m-expansion-panel.component.html'
})
export class MExpansionPanelComponent {

  componentLocation = 'app/component/component-example/m-expansion-panel/basic-ep/basic-ep.component';
  componentFiles: string[] = ['html', 'ts'];

}
