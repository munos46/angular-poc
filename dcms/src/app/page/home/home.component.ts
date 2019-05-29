import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.msgs.push({ severity: 'success', detail: 'Navigate with the menu to see an other page.' });
  }
}
