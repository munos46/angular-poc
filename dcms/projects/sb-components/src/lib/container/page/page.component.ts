import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
