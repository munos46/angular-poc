import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-messages',
  templateUrl: './p-messages.component.html'
})
export class PMessagesComponent {

  componentLocation = 'app/component/component-example/p-messages/basic-messages/basic-messages.component';
  componentFiles: string[] = ['html', 'ts'];

}
