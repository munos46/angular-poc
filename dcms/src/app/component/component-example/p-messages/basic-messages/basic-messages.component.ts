import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-basic-messages',
  templateUrl: './basic-messages.component.html'
})
export class BasicMessagesComponent implements OnInit {

  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.msgs.push({ severity: 'success', detail: 'This is a message' });
  }

}
