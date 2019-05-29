import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMessagesComponent } from './basic-messages.component';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BasicMessagesComponent', () => {
  let component: BasicMessagesComponent;
  let fixture: ComponentFixture<BasicMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMessagesComponent],
      imports: [BrowserAnimationsModule, MessagesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
